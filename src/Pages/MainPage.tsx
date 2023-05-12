import {Title, RadioMenu, InputField, FormPage, NavButton} from "@/Components";

import styles from './MainPage.module.css';
import { useState } from "react";

function MainPage() {
    const [formData, setFormData] = useState([0,0,0,0,0,0,0]);
    const [page, setPage] = useState(0);
    function setFormDataIndex(idx: number, value: any) {
        const data = [...formData];
        data[idx] = value;
        setFormData(data);
    }
    return (
        <div className={styles.root}> 
            <div className={styles.contentmenu}>
                <Title title="GDSC 한국공학대학교 멤버 모집" 
                cap={{height: 10}}/>
                <FormPage visible={page == 0}>
                    <RadioMenu summary="개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)" items={["예", "아니오"]}
                    cap={{height: 48, text:"개인 정보 관련 질문"}}
                    onValuechange={(value) => {setFormDataIndex(0, value)}}/>
                    <InputField summary="이름" onValuechange={(value) => {setFormDataIndex(1, value)}}/>
                    <InputField summary="전공" onValuechange={(value) => {setFormDataIndex(2, value)}}/>
                    <RadioMenu summary="재학 상태" items={["재학중", "휴학중"]}
                    onValuechange={(value) => {setFormDataIndex(3, value)}}/>
                    <RadioMenu summary="학년(휴학생은 복학할 학년을 선택해 주세요)" items={["1학년", "2학년", "3학년", "4학년"]}
                    onValuechange={(value) => {setFormDataIndex(4, value)}}/>
                    <InputField summary="전화번호" onValuechange={(value) => {setFormDataIndex(5, value)}}/>
                    <InputField summary="이메일" onValuechange={(value) => {setFormDataIndex(6, value)}}/>
                </FormPage>
                <NavButton leftClick={() => setPage(page - 1)} rightClick={() => setPage(page + 1)}
                    leftEnabled={page > 0} rightEnabled={page < 1}/>
                <button onClick={() => {console.log(formData)}}>제출</button>
            </div>
        </div>
    )
   }
   
export default MainPage
   