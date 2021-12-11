# Annes Manager [학원 원생 관리 프로그램]
https://annesmanager.web.app/
## 개발 배경
학원 강사로 일을 하면서, 수업 외적인 업무의 대부분이 수작업으로 이루어지는 부분이 다소 불편했음.
때문에 원생들의 정보를 저장하여 데이터 소실 및 중복등의 문제를 보완하고, 강사 인수인계에 있어서도 도움을 주기 위하여 학원 실무에 쓸 수 있는 **원생 관리 프로그램**을 만들게 됨.
(+ 퇴사 후 원장님께 드리는 선물 💕)
## 기능 목차
1. 로그인
    - 구글 oauth
    - 인증받은 사용자만 기능 이용 가능
2. 학생 정보 CRUD
    - 학생 목록 조회
        - 원장님은 모든 학생, 선생님들은 시간표에 등록 된 학생만 조회
        - 검색시에는 모두 조회가능
        - 퇴원 학생 체크시 퇴원생만 조회
    - 학생 프로필
    - 수업 시간표
    - 진도 책
    - 상담
        - 상담 내역
            - 작성자, 관리자만 수정 가능
        - 상담 매뉴얼
    - 메모
        - 작성자, 관리자만 수정 가능
3. 교재 DB
4. 문서 클라우드
5. 관리자 도구 
    - 관리자만 수정 가능
    - 학년 일괄 증가 or 감소
    - 학생정보 일괄 삭제

## 모바일 뷰
- 반응형
- 앤즈 클라우드, 책 관리자, 상담 매뉴얼, 관리자 도구 사용 불가능
## 업데이트 예정 사항
- 기간 설정해서 상담 데이터 뽑기 ( ex. 12월의 상담내역 모아보기 )
- 렌더링 최적화
- 웹뷰에서 외부 브라우저 띄울 때 https://urlopen.link/ 링크 안뜨게 개선
