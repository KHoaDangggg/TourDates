const members = [
    {
        name: "Phuc Khoa",
        nick_name: "PK",
        img: "../sources/Images/PK.jpg",
        desc: "",
        dob: "22/10/2003",
        layer: "../sources/Images/PKlayer.jpg",
    },
    {
        name: "Tien Doanh",
        nick_name: "TD",
        img: "../sources/Images/TD.jpg",
        desc: "",
        dob: "25/12/2003",
        layer: "../sources/Images/TDlayer.jpg",
    },
    {
        name: "Quang Minh",
        nick_name: "QM",
        img: "../sources/Images/TM.jpg",
        desc: "",
        dob: "27/12/2003",
        layer: "../sources/Images/QMlayer.jpg",
    },
    {
        name: "Tien Lap",
        nick_name: "TL",
        img: "../sources/Images/TL.jpg",
        desc: "1",
        dob: "15/01/2003",
        layer: "../sources/Images/TLlayer.jpg",
    },
    {
        name: "Sinh Hung",
        nick_name: "SH",
        img: "../sources/Images/SH.jpg",
        desc: "",
        dob: "06/11/2003",
        layer: "",
    },
    {
        name: "Tan Dung",
        nick_name: "Bee",
        img: "../sources/Images/Bee.jpg",
        desc: "",
        dob: "29/10/2003",
        layer: "../sources/Images/Beelayer.jpg",
    },
];
const root = document.querySelector(".members__body");
var html = members
    .map(function (member, Index) {
        return `
        <div class="member">
            <div class="member__img">
                <img src= ${member.img} alt="" class="member__img">
            </div>
            <div class="member__message">
                Click here!
            </div>
            <div class="member__name">
                ${member.name}
            </div>
        </div>
        `;
    })
    .join("");
root.innerHTML = html;
const body = document.querySelector("body");
const mems = document.getElementsByClassName("member");
var html2 = members
    .map(function (member, index) {
        return `
        <div class="memlayer" index='${index}'>
            <div class="layer"></div>
            <div class="memInfo">
                <div class="memInfo__img">
                    <img src="${members[index].layer}" alt="" />
                </div>
                <div class="memInfo__body">
                    <div class="memInfo__name">
                        <b>Full name:</b> ${members[index].name}
                    </div>
                    <div class="memInfo__aka"><b>A.K.A:</b> ${
                        members[index].nick_name
                    }</div>
                    <div class="memInfo__dob">
                        <b>Date of birth:</b> ${members[index].dob}
                    </div>
                    <div class="memInfo__desc">
                        ${
                            members[index].desc &&
                            '<img class = "unavailable"src="../sources/Images/unavailable.jpg" alt="" />'
                        }
                    </div>
                    <div class="memInfo__btn">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    })
    .join("");
body.innerHTML += html2;
Array.from(mems).forEach(function (mem, index) {
    mem.onclick = () => {
        console.log(mem);
        const currentIndex = `[index = '${index}']`;
        const removeEle = body.querySelector(currentIndex);
        removeEle.style.display = "flex";

        let infoClose = removeEle.querySelector(".memInfo__btn");
        console.log(infoClose);
        infoClose.onclick = function () {
            infoClose.closest(".memlayer").style.display = "none";
        };
    };
});
