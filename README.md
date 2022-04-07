# ALTRID LMS

Altrid LMS 는 영어 학원 맞춤형 학습관리시스템으로써, 웹 캠을 통한 eye-track 기술을 활용하여 학습자의 모든 것을 관찰하고 기록하는 SaaS 기반 서비스 입니다. 

![스크린샷 2021-07-14 오후 4 31 14](https://user-images.githubusercontent.com/42564107/125581459-479568e1-1dbe-470b-9f4a-ba63c11e8437.png)

<br/>


## 정보 
- URL : https://altridedge.com/
- 시연 영상 : https://www.youtube.com/watch?v=6pLCnaG3HS8&ab_channel=AltridLMS

<br/>

## 기술 스택
- 소개 페이지 : React, Context API, [React Reveal](https://www.react-reveal.com/), SCSS, [Material-UI](https://material-ui.com/)
- LMS 서비스 : 
  + React, Redux, Redux-Saga, [Apexcharts.js](https://apexcharts.com/), Styled-Components, Material-UI
  + Node.js, Express.js, MariaDB

<br/>

## 실행 방법

```sh
### 프로젝트 가져오기 ###
$ git init
$ git remote add origin https://github.com/Optmier/altrid-introduce.git
$ git pull origin main

### 빌드 구성 설정 확인 ###
src/configs/configs.js 파일에 buildMode = 'dev' 확인

### 모듈 설치 및 실행 ###
$ yarn install
$ yarn start
```

## 빌드 및 업로드
### SFTP Config
```json
{
    "name": "<서버 이름>",
    "host": "<서버 IP 주소>",
    "protocol": "sftp",
    "port": 22,
    "username": "<서버 계정 이름>",
    "password": "<서버 접속 암호>",
    "context": "build/",
    "remotePath": "<업로드 할 디렉토리>",
    "uploadOnSave": false,
    "watcher": {
        "files": "**/*",
        "autoUpload": false,
        "autoDelete": false
    },
    "ignore": ["**/.vscode", "**/.git", "**/.DS_Store"]
}
```

### 빌드 구성 설정 확인
```sh
src/configs/configs.js 파일에 buildMode = 'prod' 설정 확인
```

### 빌드 및 업로드
```sh
$ yarn build
build 폴더 우클릭 후 Upload Folder
```


## 프로젝트 구조
```sh
public 퍼블릭 폴더 :: 백그라운드 이미지 및 클립 영상
src
  components :: 컴포넌트 폴더
    ChannelIO :: 채널톡 API 설정
      accessKeys.js (포함되지 않음, 직접 파일 넣어줘야 함) :: 채널톡 API 키 설정
      ChannelService.js :: 채널톡 불러오는 코드
      generateHash.js :: 채널톡 보안 해시 함수 (현재는 사용하지 않음)
  configs :: 빌드 모드 및 API 주소 등 세팅
  database :: 파이어베이스 데이터베이스 설정 (현재는 사용하지 않음)
  datas :: 각종 컨텐츠 데이터 (문자열), 현재 일부만 사용 중
  images :: 로고, 배너, 섹션 이미지 등 이미지 리소스
  pages :: 페이지 컴포넌트
    Error.js :: 오류 발생 시 렌더링할 페이지
    Error404.js :: 찾을 수 없는 페이지 접근 시 렌더링할 페이지
    Price.js :: 가격정책 페이지
    Service.js :: 이용방법 페이지
  styles :: 스타일 파일, 현재는 styled-component를 이용해서 컴포넌트 상단에 직접 스타일을 정의하는 방식으로 병행 사용 중
```

## 참고사항

해당 Repository는 서비스의 **소개 페이지**와 관련된 코드입니다.

> [@jun094](https://github.com/jun094) 의 [altrid-introduce](https://github.com/jun094/altrid-introduce) 에서 추가됨.
