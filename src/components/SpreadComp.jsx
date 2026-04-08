// 2.1.4 (Step1) SpreadComp 컴포넌트를 생성하고 다음과 같
import NameCard from "./NameCard";

export default function SpreadComp(){
    const userDate = {
        id: 1,
        name: "Tom",
        age: 25,
        job: "developer",
        location: "seoul",
    };

    return(
        <>
            <NameCard{...userDate}/>    
        </>
    )
}
