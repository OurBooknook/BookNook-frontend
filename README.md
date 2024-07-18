# 📚 BookNook
![image](https://github.com/user-attachments/assets/71e4e8bf-893c-413a-8cd0-72f480ecfaee)

독서 기록을 할 수 있는 나만의 아늑한 독서노트, BookNook
### 링크
[🔗 배포 주소](https://book-nook-frontend-umber.vercel.app/)

<br>
<br>

# 개발환경 및 기술스택
### environment
<div display='flex'>
  <img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=macos&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/visual studio code-2F80ED?style=for-the-badge&logoColor=ffffff"/>
</div>

### config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff"/>

### development
<div display='flex'>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=ffffff"/>
</div>
<div display='flex'>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=ffffff"/>
</div>
<div display='flex'>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/ReCharts-23B5BF?style=for-the-badge&logoColor=ffffff"/>
</div>

<br>
<br>

# 컨벤션
### 커밋 컨벤션
| type | 설명 |
| --- | --- |
| feat | 새로운 기능 |
| fix | 버그 수정 |
| refactor | 기능을 추가하지 않은 코드 변화, 리팩토링 |
| design | CSS 수정 |
| chore | 빌드 업무 수정, 패키지 매니저 수정(gitignore 수정 등) |
| setting | 개발 환경 세팅 |
| enhancement | 성능 최적화 |
| build | 빌드 시스템이나 외부 의존성에 영향을 주는 변화 |
| docs | 문서 변화 |
| test | 테스트 |
| deploy | 배포 |

### ESLint(Airbnb)

<br>
<br>

# 주요 페이지 및 기능
### 메인 페이지
- 이달의 도서: BookNook 사용자들이 가장 많이 저장한 도서 TOP5입니다. (읽은 책 기준)
- 이달의 독서왕: BookNook 사용자들 중 가장 많은 책을 읽은 사용자 순위입니다. (읽은 책 기준)
  - API 개발 중단으로 데모 버전을 확인할 수 있습니다.

| 메인 페이지 | 이달의 독서 데모버전 |
| -- | -- |
| <img src="https://github.com/user-attachments/assets/37541489-fdee-4408-b348-e6cbddff121e" alt="메인페이지 사진" /> | <img src="https://github.com/user-attachments/assets/4d49bb0b-71bf-4047-91f7-3265a5e3a75d" alt="이달의 독서왕 데모버전 사진" />

<br>

### 도서 검색
- 검색창: 상단 헤더의 검색창에서 도서를 검색할 수 있습니다.
- 검색 결과 목록: 검색 결과 목록이 보여집니다. 한 페이지당 10개의 결과를 확인할 수 있습니다.
- 검색 결과 상세: 목록에서 제목을 클릭하면 상세페이지로 넘어갑니다. 도서 정보와 서재에 담기 버튼이 있습니다.
- 서재에 담기: 도서를 읽은 상태에 따라 서재에 담을 수 있습니다.

| 도서 검색 목록 페이지 |
| -- |
| <img src="https://github.com/user-attachments/assets/945ba5ae-88bb-45f6-b723-e4175521f5c8" alt="도서 검색 목록 페이지 사진" /> |

| 도서 검색 상세 페이지 |
| -- |
| <img src="https://github.com/user-attachments/assets/4e6c204a-e626-4e54-b5f6-29dcada17468" alt="도서 검색 상세 페이지 사진" /> |

| 읽은 책 담기 | 읽고 있는 책 담기 | 읽고 싶은 책 담기|
| -- | -- | -- |
| <img src="https://github.com/user-attachments/assets/36dba07c-f870-4c50-b94e-67861f943bd0" alt="읽은 책 담기 모달" /> | <img src="https://github.com/user-attachments/assets/b294acbe-304d-4c12-92dd-33d0d142d252" alt="읽고 있는 책 담기 모달" /> | <img src="https://github.com/user-attachments/assets/0ccfd919-9ddb-4b87-89d1-6aa347d55524" alt="읽고 싶은 책 담기 모달" /> |

<br>

### 서재
- 서재 목록: 읽은 상태에 따라 서재 목록을 확인할 수 있습니다. 클릭 시 해당 도서의 서재 상세페이지로 넘어갑니다.
- 서재 상세: 서재에 담을 때 저장한 정보와 독서 기록을 확인할 수 있습니다. 기록을 추가하거나 삭제할 수 있고, 서재 정보도 수정 및 삭제가 가능합니다.

| 서재 목록 페이지 |
| -- |
| <img src="https://github.com/user-attachments/assets/7d323079-1714-4dc0-b7d8-d6d0de460902" alt="서재 목록 페이지" /> |

| 서재 상세 페이지 |
| -- |
| <img src="https://github.com/user-attachments/assets/7641e415-3a8c-44c9-bade-21e156d8c37f" alt="서재 상세 페이지" /> |

<br>

### 통계
- 연간 독서량과 월별 독서 통계를 확인할 수 있습니다.

| 통게 페이지 |
| -- |
| <img src="https://github.com/user-attachments/assets/ad314f62-4d33-4b7a-92d8-521967911692" alt="통계 페이지" /> |

<br>
<br>

# 시작 가이드
```bash
// 1. git 클론하기
git clone https://github.com/OurBooknook/BookNook-frontend.git

// 2. dependecies 설치
npm install

// 3. 개발 버전 실행
npm start
```
