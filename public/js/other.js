// otherWork 데이터 세팅
let otherWorkData = [
    {
        category: "webDesign",
        data: [
            {title: "아쿠아디파르마", thumbImg:"homepage/aquadiparma_thumb.jpg", imgAll: "homepage/aquadiparma.png", link: "https://www.acquadiparma.kr/",  classific: ["제작방식", "소요기간", "반응형"],  context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "디퍼런트컴퍼니", thumbImg:"homepage/different_thumb.jpg", imgAll: "homepage/different.png", link: "http://differ-ent.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile"]},
            
            {title: "힐링안과", thumbImg:"homepage/healing_thumb.jpg", imgAll: "homepage/healing.png", link: "http://healingeyeclinic.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile"]},

            {title: "김기윤 법률사무소", thumbImg:"homepage/kimkiyoon_thumb.jpg", imgAll: "homepage/kimkiyoon.png", link: "http://lawnkim.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 4주", "PC / Tablet / Mobile"]},

            {title: "웬즈빌", thumbImg:"homepage/wensbill_thumb.jpg", imgAll: "homepage/wensbill.png", link: "http://wensbill.cafe24.com/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile"]},

            {title: "앙코라 커피", thumbImg:"homepage/ancora_thumb.jpg", imgAll: "homepage/ancora.png", link: "http://ancoracoffee.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "라이틸란 꾸꼬", thumbImg:"homepage/kukko_thumb.jpg", imgAll: "homepage/kukko.png", link: "http://kukkobeer.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile"]},

            {title: "아뮤즈엔터테인먼트", thumbImg:"homepage/amuse_thumb.jpg", imgAll: "homepage/amuse.png", link: "http://amusekorea.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile"]},
            
            {title: "마누카 골드", thumbImg:"homepage/manuka_thumb.jpg", imgAll: "homepage/manuka.png", link: "http://manukagold.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "네츄럴 반다", thumbImg:"homepage/bandha_thumb.jpg", imgAll: "homepage/bandha.png", link: "https://bandha.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "나인밧", thumbImg:"homepage/ninebat_thumb.jpg", imgAll: "homepage/ninebat.png", link: "https://ninebat.com/", classific: ["제작방식", "소요기간", "반응형"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "화수커피작업실", thumbImg:"homepage/hawsoo_thumb.jpg", imgAll: "homepage/hawsoo.png", link: "http://hwasoocoffee.com/", classific: ["제작방식", "소요기간", "반응형"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "바른공사 랜닥", thumbImg:"homepage/barn_thumb.jpg", imgAll: "homepage/barn.png", link: "http://landoc.co.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["CGI 솔루션 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "평택시 청소년 진로지원센터", thumbImg:"homepage/teenager/teenager_1_thumb.jpg", imgAll: "homepage/teenager/teenager_1.jpg", classific: ["제작방식", "소요기간", "컨셉설명"], context: ["디자인 시안 제작", "총 1주", "선생님 또는 관련 기관들이 주 이용자로써 깔끔하게 정리된 디자인으로 쉽고 빠르게 원하는 목적 페이지에 도달할 수 있도록 하는 것을 최우선으로 작업하였습니다."]},
            
            {title: "곤충산업중앙회", thumbImg:"homepage/bug_thumb.jpg", imgAll: "homepage/bug.jpg", classific: ["제작방식", "소요기간", "컨셉설명"], context: ["디자인 시안 제작", "총 1주", "곤충이라는 키워드가 갖고 있는 불편한 이미지를 완화하기 위하여 부드러운 컬러감과 캐리커쳐 등을 활용하여 친숙한 이미지를 주는 것을 목표로 디자인 하였습니다."]},
        ]
    },
    {
        category: "graphicDesign",
        data : [
            {title: "꾸꼬&amp;핀크리스프 콜라보", thumbImg: "detailPage/finn_kukko_thumb.jpg", imgAll: "detailPage/finn_kukko.jpg", classific: ["분류", "설명"],  context: ["상세페이지", "핀란드 브랜드인 핀크리스프와 라이틸란 꾸꼬의 콜라보 이벤트 페이지입니다. 핀크리스프의 브랜드 컬러를 메인으로 강렬하면서도 친근한 느낌으로 제작하였습니다."]},

            {title: "네츄럴 반다 제품", thumbImg: "detailPage/bandha_thumb.jpg", imgAll: "detailPage/bandha.png", classific: ["분류", "설명"],  context: ["상세페이지", "소비자에게 브랜드의 특허기술을 통한 기능성 제품 인지효과를 목적으로 제작되었습니다. 아이콘을 사용하여 기능성 화장품임을 한눈에 알아볼 수 있도록 하였으며, 비포&애프터 이미지와 특허기능 증빙자료를 함께 노출함으로써 신뢰감을 높였습니다."]},
            
            {title: "힐링안과 &amp; SK텔레콤<br>제휴 이벤트", thumbImg: "detailPage/healing_thumb.jpg", imgAll: "detailPage/healing.png",classific: ["분류", "설명"],  context: ["상세페이지", "쿠폰 모양의 프레임을 활용한 레이아웃으로 이벤트의 취지인 SK텔레콤 직원들만의 혜택임을 강조하여 흥미를 유발하였고, 어려운 의학적 설명들은 이미지 등을 활용하여 쉽게 이해할 수 있도록 하였습니다."]},

            {title: "라이틸란 꾸꼬 제품", thumbImg: "detailPage/kukko_thumb.jpg", imgAll: "detailPage/kukko.jpg", classific: ["분류", "설명"],  context: ["상세페이지", "국내에는 아직 생소한 브랜드인 라이틸란 꾸꼬 맥주의 브랜드 설명을 중심으로 제작하였습니다. 레이아웃은 통일감 있게 배치하되, 맥주의 맛에 따라 제품의 색상이 다른 점을 활용하여 컬러로 포인트를 주었습니다."]},

            {title: "드랍오프 제품", thumbImg: "detailPage/dropOff_thumb.jpg", imgAll: "detailPage/dropOff.png", classific: ["분류", "설명"],  context: ["상세페이지", "드랍오프는 리사이클링, 친환경 소재를 사용하여 제품을 제작하는 의류 브랜드로써 깔끔하고 젊은 소비자들을 타겟으로 제작되었습니다. 브랜드가 추구하는 가치를 소비자들이 쉽게 공감할 수 있도록 리사이클되는 과정들을 아이콘을 활용하여 디자인하였습니다."]},
            
            {title: "나인밧 제품", thumbImg: "detailPage/ninebat_thumb.jpg", imgAll: "detailPage/ninebat.jpg", classific: ["분류", "설명"],  context: ["상세페이지", "나인밧은 심플함을 추구하는 디자이너 의류 브랜드이기에 제품 이미지를 중점적으로 사용하였으며, 제품의 특징을 키워드로 뽑아 하단쪽에 배치하여 제품에 대한 정보를 전달하였습니다."]},

            {title: "앙코라커피 제품", thumbImg: "detailPage/ancora_thumb.jpg", imgAll: "detailPage/ancora.jpg", classific: ["분류", "설명"],  context: ["상세페이지", "앙코라 커피는 '시간대별로 마시고 싶은 커피'라는 슬로건을 갖고 있는 브랜드입니다. 각 제품마다 새벽, 아침, 점심, 저녁 등에 어울리는 컬러로 메인 색상을 지정하였으며, 감성적인 문구와 폰트 사용으로 브랜드의 이미지와 통일감을 맞췄습니다."]},

            {title: "더블원스튜디오 제품", thumbImg: "detailPage/doubleOne_thumb.jpg", imgAll: "detailPage/doubleOne.jpg", classific: ["분류", "설명"],  context: ["상세페이지", "더블원스튜디오는 심플하고 페미닌한 컨셉의 여성 의류 브랜드로 군더더기 없이 깔끔한 느낌을 추구하였습니다."]},

            {title: "BEIFFE LOGO", thumbImg: "logo/beiffe1_thumb.jpg", imgAll: "logo/beiffe1.jpg", classific: ["분류", "설명"],  context: ["로고 디자인", "BEIFFE LOGO DESIGN"]},
        ]
    },
    {
        category: "proposal",
        data : [
            {title: "닥터디퍼런트 제안서", thumbImg: "proposal/drdifferent.jpg", imgAll: "proposal/drdifferent_proposal.jpg", classific: ["분류", "설명"],  context: ["마케팅 제안서", "브랜드 온라인 광고 마케팅 제안서로써 회사 소개 및 전략, 예산안 등의 내용을 담고 있습니다."]},

            {title: "추계예술대학교<br>엔터테인먼트 운영 계획서", thumbImg: "proposal/university_thumb.jpg", imgAll: "proposal/university.jpg", classific: ["분류", "설명"],  context: ["운영 소개서", "추계예술대학교 엔터테인먼트 프로젝트 운영 계획서 입니다. 프로젝트 운영 개요와 세부내용, 예산안 등을 담고 있습니다."]},

            {title: "ANDOC 어플리케이션", thumbImg: "proposal/andoc_thumb.jpg", imgAll: "proposal/andoc.jpg", classific: ["분류", "설명"],  context: ["어플리케이션 소개서", "ANDOC 어플리케이션은 자체적으로 제작한 신규 눈건강관리 어플리케이션으로 어플리케이션에 대한 소개와 베타서비스 반응, 차별화 전략 등을 담고 있습니다."]},
        ]
    }
];

const otherWork = document.querySelector(".cont4.otherWork");
const otherTabMenu = document.querySelectorAll(".cont4.otherWork .otherWorkWrap .tabMenu li");
const otherTabConts = document.querySelector(".cont4.otherWork .otherWorkWrap .tabConts");
const otherTabList = document.querySelectorAll(".cont4.otherWork .otherWorkWrap .tabConts .tabList");

// 모달창 제어
const otherModal = document.querySelector(".cont4.otherWork .modal");
const otherModalClose = document.querySelector(".cont4.otherWork .modal .closeIcon");

const otherModalImg = document.querySelector(".cont4.otherWork .modal .left img");

const otherModalTitle = document.querySelector(".cont4.otherWork .modal .right .modalTitle");
const otherModalLink = document.querySelector(".cont4.otherWork .modal .right .linkBtn .btn");
const otherModalContent = document.querySelector(".cont4.otherWork .modal .right .contentWrap");

otherTabList[0].classList.add("on");
otherTabMenu[0].classList.add("on");

let tabContsHeight = otherTabConts.querySelector(".on").offsetHeight;
otherWork.style.height = tabContsHeight + 750 + "px";

let findText;

// 탭메뉴 클릭 시 콘텐츠 및 메뉴 클래스 제어
for(let i = 0; i < otherTabMenu.length; i++){
    otherTabMenu[i].onclick = function(){
        otherTabMenu.forEach(function(menu, idx){
            menu.classList.remove("on");
            otherTabList[idx].classList.remove("on");
            otherTabList[idx].style.opacity = "0";
            otherTabList[idx].style.transform = "translateY(-50px)";
        });

        otherTabMenu[i].classList.add("on");
        otherTabList[i].classList.add("on");
        setTimeout(function(){
            otherTabList[i].style.opacity = "1";
            otherTabList[i].style.transform = "translateY(0)";
        }, 10);

        tabContsHeight = otherTabConts.querySelector(".on").offsetHeight;
        otherWork.style.height = tabContsHeight + 750 + "px";   
    }
}

// 탭리스트를 클릭하면 모달창 제어 및 모달창 콘텐츠 변경
for(let a = 0; a < otherTabList.length; a++){
    for(let i = 0; i < otherTabList[a].querySelectorAll(".contWrap").length; i++){
        otherTabList[a].querySelectorAll(".contWrap")[i].onclick = function(e){
            e.preventDefault();

            otherModalTitle.innerText = "";
            otherModalImg.src = "";
            otherModalContent.innerText = "";

            otherModal.classList.add("on");
            setTimeout(function(){
                otherModal.style.opacity = "1";
            }, 100);

            findText =  otherTabList[a].querySelectorAll(".contWrap")[i].querySelector("h3").innerHTML;

            for(let i = 0; i < otherWorkData[a].data.length; i++){
                if(otherWorkData[a].data[i].title === findText){
                    otherModalImg.src = `/img/other/${otherWorkData[a].data[i].imgAll}`;

                    otherModalTitle.innerHTML = otherWorkData[a].data[i].title;

                    console.log(otherWorkData[a].data[i].title);

                    if(otherWorkData[a].data[i].link){
                        otherModalLink.parentElement.style.display = "block";
                        otherModalLink.setAttribute("href", otherWorkData[a].data[i].link);
                    }
                    else {
                        otherModalLink.parentElement.style.display = "none";
                    }
                    
                    for(let h = 0; h < otherWorkData[a].data[i].classific.length; h++){
                        let contentWrap = document.createElement("div");
                        contentWrap.setAttribute("class", "content");

                        let contentTitle = document.createElement("p");
                        contentTitle.setAttribute("class", "contentTitle");

                        let contentText = document.createElement("p");
                        contentText.setAttribute("class", "detailText");

                        otherModalContent.append(contentWrap);
                        contentWrap.append(contentTitle);
                        contentWrap.append(contentText);

                        contentTitle.innerText = otherWorkData[a].data[i].classific[h];
                        contentText.innerText = otherWorkData[a].data[i].context[h];
                    }
                }
            }
        }
    
        otherModalClose.onclick = function(e){
            e.preventDefault();

            otherModal.style.opacity = "0";
            setTimeout(function(){
                otherModal.classList.remove("on");
            }, 500);
        }
    }
}

otherModal.onclick = function(e){

    if(e.target.classList.contains("modal")){
        otherModal.style.opacity = "0";

        setTimeout(function(){
            otherModal.classList.remove("on");
        }, 500);
    }

}