# Certificate Moeum (a.k.a moacert)

### 문제 제기 

- 온라인 수료증이 발급되지 않는 프로그램에 참가한 경우, 링크드인에 PDF 를 공유하기가 불편하다. 
- 구글 드라이브를 통해서 링크를 첨부하면 열리는 속도가 매우 느리다. 



### 해결방법 

- 나만의 Certificate 들을 모아서, 글로벌한 공유 링크를 생성하여 링크드인에 공유할 수 있도록 하자. 
- 뿐만 아니라 Certificate 들을 전시할 수 있는 메인 페이지도 만들어 보자. 



### 구현 계획 

**React Web App** 

- certificate upload 

  - cli 구현해보기 

  ```
  moacert --upload [FILE NAME].pdf
  
  // git hook 
  git push origin master // release  
  git push origin develop // deploy beta 
  ```

- certificate display 

  - main page - certificate image display 
    - filter options (recent/name)
    - glowing effect for new certificates (for one month)
  - detail page - page to be shared

- certificate download

- etc. 
  - Design system : Ant design ? Uber ? Others ? 
  - Color : Samsung blue + Black / White 
  - Make the certificate stand out ! 



**Database Tables** (SQLite)

- Certificate
  - uid 
  - startAt TIMESTAMP 
  - endAt TIMESTAMP (NULLABLE)
  - name
  - issuer 
  - pdfLink
  - description 