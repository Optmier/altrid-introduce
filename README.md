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

### 모듈 설치 및 실행 ###
$ yarn install
$ yarn run dev
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

### 빌드 및 업로드
```sh
$ yarn build
build 폴더 우클릭 후 Upload Folder
```


## 프로젝트 구조
```sh
```

## 참고사항

해당 Repository는 서비스의 **소개 페이지**와 관련된 코드입니다.

> [@jun094](https://github.com/jun094) 의 [altrid-introduce](https://github.com/jun094/altrid-introduce) 에서 추가됨.
