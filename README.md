#Next

---

MFA (Micro Frontend Architecture) 를 착안하여 안정성 있고 지속 가능한 코드 베이스를 유지하는 데에 목적을 둔 template repository 입니다. Next repo 와 프론트엔드 챕터 내에서 사용되는 레포지토리 간 구조는 아래 이미지를 참고해 주세요.
<img src="https://asset.seoltab.com/f1a90f1b022742afbeebe2c528ff597b.png"/>
<br/>

## Quck Start

- [Introduction](#next)
- [Stacks](#stacks)
- [Documentation](#Documentation)
  - [How to make a new repository with Next Repo](#how-to-create-a-new-repository-with-next-repo)
  - [How to reba(se next repo to seoltab.com project](#how-to-rebase-next-repo-to-seoltabcom-project)
- 그 외 기능 업데이트 예정
- [Contribution](#contribution)

<br/>
##Stacks
***
사용 중인 스택과 버전을 확인하세요. _<span>(last update 23-02-15)</span> <br/>_

|       setting       |        name        |   version   |                                                       reference(optional)                                                       |
| :-----------------: | :----------------: | :---------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| **Initial Setting** |       `node`       | `=< v.18.*` |                                                                                                                                 |
|                     |      `husky`       |             |                                                                                                                                 |
|                     |    `typescript`    |             |              <a href="https://github.com/GoodOnuii/next/blob/main/tsconfig.json" target="_blank">Configuration</a>              |
|                     |      `eslint`      |             | <a href="https://www.notion.so/onuiiofficial/Common-ESLint-872bef80468548bfbfb24664176acb74?pvs=4" target="_blank">Reference<a> |
|  **Test Setting**   |      `vitest`      | `=< v.28.*` |            <a href="https://github.com/GoodOnuii/next/blob/main/vitest.config.ts" target="_blank">Configuration</a>             |
|                     | `testing-library`  | `=<5.16.*`  |                                                                                                                                 |
|                     |    `playwright`    |             |          <a href="https://github.com/GoodOnuii/next/blob/main/playwright.config.ts" target="_blank">Configuration</a>           |
|      **Tools**      |     `zustand`      | `=< v.4.*`  |                                                                                                                                 |
|                     |     `stitches`     |             |                                                       Configuration (TBU)                                                       |
|                     | `GraphQL + Apollo` |             |                                                                                                                                 |

<br/>

##Documentation

---

Next repo 는 template repository 의 기능의 일환으로 <span style="font-style: italic">~.seoltab.com</span> 프로젝트의 초기 세팅을 돕습니다. 뿐만 아니라 versioning, convention 등의 공통 변경 사항을 각각의 레포에 반영하기 위한 토대를 제공합니다.
####How to make a new repository with Next Repo
(TBU)
<br/>
####How to rebase next repo to `~seoltab.com` project

1. 레포 내 remote 브랜치로 next repo 를 추가합니다.

```
git remote add next https://github.com/GoodOnuii/next
```

2. next repo 가 제대로 추가되었는지 명령어를 통하여 확인합니다. 아래 명령어를 통해 나오는 리스트에 next 가 출력되어야 합니다.

```
git remote
```

3. next repo 내 최신 사항을 반영하기 위해 아래 명령어를 입력합니다.

```
git pull next
```

4. next repo 내 main 브랜치를 적용하기 위해 아래 명령어를 입력합니다.

```
git rebase next/main
```

5. (참고 사항) remote 에 등록된 next repo 를 지우려면 다음 명령어를 입력합니다.

```
git remote rm next
```

<!-- 6. 충돌 발생 ... ? -->

<!-- - How to resolve confilcts -->
<br/>
<br/>

### Additional common functions(TBU)
<br/>
<br/>

##Contribution
아래 케이스에 해당이 된다면 <a href="https://github.com/GoodOnuii/next/issues">이슈를 등록해 주세요.</a> (템플릿은 곧 업데이트 될 예정입니다.) 이슈를 등록할 때, 각각의 사안에 알맞는 라벨을 등록해 주세요. <br/>

- 버그 리포트 <button style="color: #d73a4a">bug</button>
- 라이브러리 등의 버전 업데이트 요청 <button style="color: #0366d6">dependencies</button> 또는 <button style="color: #0075ca">documentation</button>
- 기타 제안 사항 <button style="color: #E8B07F">suggestion</button>
- 그 외 질문 <button style="color: #d876e3">question</button>

이슈를 등록한 뒤에는 Pull Requests 를 직접 열 수도 있습니다. 이슈 해결을 위해 Pull Request 를 열면 아래 사항을 준수해 주세요. 
1. Next repo 는 main 이라는 단일 브랜치로 운용됩니다. 따라서 main 기준 새 브랜치를 생성하여 작업합니다.
2. 작업을 마치고 Pull Request 를 열면 코드 오너인 @vivi-onuii @momenthana 가 자동으로 리뷰어로 등록되고, 필요에 따라 리뷰어를 추가할 수 있습니다.
3. 리뷰 승인 후 작업을 마친 브랜치를 main 에 머지하기 전에 `yarn build` 커맨드를 사용하여 빌드가 성공하는지 확인합니다.
4. 위 단계를 모두 끝낸 뒤 main 브랜치에 머지합니다. 




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<span style="color: darkgrey">최종 수정 23-02-20 @vivi-onuii</span>