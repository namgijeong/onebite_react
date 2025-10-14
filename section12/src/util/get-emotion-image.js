//public 폴더안에 있는 이미지는 import가 아닌 경로로
//asset 폴더안에 있는 이미지는 import로 
//vite가 제공하는 이미지 최적화를 사용하려면 asset 폴더밑에 => data url format 사용하여 => 브라우저 캐시로 효율적
//하지만 굉장한 다수의 이미지는 부하가 되므로 public 폴더밑에 보관한다
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId){
    switch(emotionId){
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default: return null;
    }
}

