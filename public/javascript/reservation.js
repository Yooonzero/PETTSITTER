<<<<<<< HEAD
// // // 게시글 상세 조회
// // window.addEventListener("DOMContentLoaded", async function(){
// //     fetch(`/reservations`)
// //     .then((results) => results)
// //     .then((data) => {
//         console.log(data);
//         // const cardList  = document.getElementById("cardList")
//         //     const title = post["title"]
//         //     const genre = post["genre"]
//         //     const content = post["content"]
//         //     const temp_html = `<div class="card">
//         //     <h3 class="tit" id="title">${title}</h3>
//         //     <h5 id="genre">${genre}</h5>
//         //     <h5 id="genre">${genre}</h5>
//         //     <p class="desc">${content}</p>`;
//         //    cardList.insertAdjacentHTML("beforeend", temp_html)
//     });
// });
=======

>>>>>>> 4f2db964553f6a09e85ba274ce3933297fe80b03
async function getReservation() {
    try {
        // '/reservation' 경로로 GET 요청을 보냅니다.
        const response = await fetch('/reservations');
<<<<<<< HEAD
       // 서버로부터 받은 JSON 데이터를 파싱하여 JavaScript 객체로 변환합니다.
        const reservation = await response.json();
        console.log(reservation);
        // reservation 목록을 표시하는 함수를 호출합니다.
        displayReservation(reservation);
=======
        // 서버로부터 받은 JSON 데이터를 파싱하여 JavaScript 객체로 변환합니다.
        const reservation = await response.json();
        // reservation 목록을 표시하는 함수를 호출합니다.
        displayPetsitters(reservation);
>>>>>>> 4f2db964553f6a09e85ba274ce3933297fe80b03
    } catch (error) {
        // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
        console.error(error);
    }
}

// reservation 목록을 화면에 표시하는 함수
<<<<<<< HEAD
function displayReservation(reservation) {
=======
function displayPetsitters(reservation) {
>>>>>>> 4f2db964553f6a09e85ba274ce3933297fe80b03
    // petsitterList라는 ID를 가진 HTML 요소를 선택합니다.
    const reservationList = document.getElementById('reservation');
    // 이전에 표시된 내용을 초기화합니다.
    reservationList.innerHTML = '';

    if (reservation.length === 0) {
        // 검색 결과가 없을 경우 "No petsitters found." 메시지를 표시합니다.
        reservationList.innerHTML = '<p>No reservation found.</p>';
        return;
    }

    // 검색 결과를 리스트 형태로 표시하기 위해 ul 요소를 생성합니다.
    const ul = document.createElement('ul');
    // 각 펫시터 정보를 리스트 아이템으로 생성하여 ul 요소에 추가합니다.
<<<<<<< HEAD
    reservation.map(reservation => {
        const li = document.createElement('li');
        // 각 펫시터의 이름과 경력 정보를 리스트 아이템에 텍스트로 추가합니다.
        li.textContent = `${reservation.start_date} - enddate: ${reservation.end_date}`;
=======
    reservation.forEach(reservation => {
        const li = document.createElement('li');
        // 각 펫시터의 이름과 경력 정보를 리스트 아이템에 텍스트로 추가합니다.
        li.textContent = `${reservation.start_date} - Career: ${reservation.end_date}`;
>>>>>>> 4f2db964553f6a09e85ba274ce3933297fe80b03
        ul.appendChild(li);
    });
    // 생성한 ul 요소를 화면에 표시하기 위해 petsitterListDiv에 추가합니다.
    reservationList.appendChild(ul);
}

// 페이지가 로드되면 모든 펫시터 목록을 가져와서 표시합니다.
getReservation();