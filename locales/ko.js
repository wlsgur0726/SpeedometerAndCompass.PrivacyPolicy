window.policyLocales ??= {};
window.policyLocales.ko = {
  "languageName": "한국어",
  "title": "개인정보처리방침",
  "pageTitle": "개인정보처리방침 · 속도계와 나침반",
  "description": "속도계와 나침반(Speedometer and Compass)의 개인정보처리방침",
  "appName": "속도계와 나침반 · Speedometer and Compass",
  "skipToContent": "본문으로 이동",
  "languageSelection": "언어 선택",
  "effectiveDate": {
    "label": "시행일 및 최종 수정일:",
    "iso": "2026-10-31",
    "text": "2026년 10월 31일"
  },
  "introduction": [
    "kjh(이하 “개발자”)는 Android 앱 속도계와 나침반(Speedometer and Compass)의 개인정보 처리 내용을 다음과 같이 안내합니다. 앱 패키지명은 com.kjh.speedometerandcompass입니다."
  ],
  "sections": [
    {
      "title": "1. 처리하는 정보와 목적",
      "paragraphs": [
        "앱은 회원가입을 요구하지 않으며, 개발자는 주행 기록이나 GPS 좌표를 수집하는 별도 서버를 운영하지 않습니다."
      ],
      "table": {
        "caption": "앱 기능에 사용하는 정보",
        "headers": [
          "정보",
          "이용 목적",
          "보관 방식"
        ],
        "rows": [
          [
            "정확한 위치(위도·경도), GPS 속도·정확도 및 측정 시각",
            "현재 속도, 이동 거리, 주행 시간 및 통계 계산",
            "기기 메모리에서 처리하며, 주행 기록을 파일이나 개발자 서버에 저장하지 않습니다."
          ],
          [
            "지자기 및 가속도 센서 값",
            "휴대폰이 가리키는 나침반 방향 계산",
            "기기에서 처리하며 개발자 서버로 전송하지 않습니다."
          ],
          [
            "언어 및 주행·화면·알림 설정",
            "사용자가 선택한 설정 유지",
            "기기 내부 앱 저장 공간에 저장합니다."
          ],
          [
            "이메일 주소 및 문의 내용",
            "사용자가 이메일로 문의한 경우 답변 및 문제 해결",
            "문의 처리에 필요한 기간 보관하며, 처리 완료 후 불필요한 정보는 삭제합니다. 법령상 보관 의무가 있으면 해당 기간을 따릅니다."
          ]
        ]
      }
    },
    {
      "title": "2. 위치 접근 및 주행 알림",
      "paragraphs": [
        "정확한 위치 권한을 허용하면 앱의 주행 화면에서 현재 속도와 위치 기반 정보를 계산합니다. 위치 접근은 주행 시작 전에도 주행 화면이 표시되는 동안 발생할 수 있습니다. 사용자가 시작한 주행 중에는 위치 유형의 Android foreground service를 사용하여 화면이 꺼지거나 다른 앱으로 전환해도 주행을 이어 갑니다.",
        "기기 설정에서 위치 권한을 철회하거나 위치 기능을 끌 수 있습니다. 이 경우 GPS 기반 속도 및 거리 기능을 사용할 수 없습니다. 선택적 주행 알림을 위한 알림 권한을 거부해도 주행 기록은 가능하며, 실행 중 서비스의 시스템 표시는 Android 설정과 버전에 따라 남을 수 있습니다."
      ]
    },
    {
      "title": "3. Google AdMob 광고 및 제3자 처리",
      "paragraphs": [
        "앱은 Google AdMob(Google Mobile Ads SDK)을 통해 배너 광고를 제공합니다. 광고 SDK는 광고 제공·측정, 분석 및 부정행위 방지를 위해 IP 주소(대략적인 위치 추정에 사용될 수 있음), 광고 노출·탭 등 이용 상호작용, 진단 정보, Android 광고 ID 및 앱 세트 ID 같은 기기 식별자를 수집하고 Google 등 광고 서비스와 공유할 수 있습니다. 실제 처리는 SDK 버전, 기기·광고 설정 및 적용되는 동의 상태에 따라 달라집니다.",
        "앱 코드는 주행 계산에 사용하는 GPS 좌표와 센서 값을 광고 요청에 직접 첨부하지 않습니다. 광고 SDK의 정보 처리에는 Google 개인정보처리방침 및 Google 파트너 서비스의 정보 이용 안내가 적용됩니다. SDK의 데이터 항목은 Google의 데이터 공개 안내에서도 확인할 수 있습니다.",
        "Google의 정보는 해외 서버에서 처리될 수 있으며, 보관·삭제 및 국제 이전에 관한 내용은 Google의 방침을 확인해 주세요. 기기에서 앱 데이터를 삭제해도 Google이 이미 처리한 데이터까지 삭제되지는 않습니다. Android 설정의 광고 관련 메뉴에서 광고 ID를 재설정하거나 삭제할 수 있습니다. 메뉴와 제공 기능은 기기에 따라 다릅니다."
      ],
      "links": [
        {
          "text": "Google 개인정보처리방침",
          "url": "https://policies.google.com/privacy?hl=ko"
        },
        {
          "text": "Google 파트너 서비스의 정보 이용 안내",
          "url": "https://policies.google.com/technologies/partner-sites?hl=ko"
        },
        {
          "text": "Google의 데이터 공개 안내",
          "url": "https://developers.google.com/admob/android/privacy/play-data-disclosure?hl=ko"
        }
      ]
    },
    {
      "title": "4. 보관 및 삭제",
      "paragraphs": [
        "주행 정보는 앱 프로세스의 메모리에만 유지되며 프로세스 종료·강제 종료·기기 재부팅 후 복원되지 않습니다. 주행 종료 후 결과는 프로세스가 유지되는 동안 화면에 남을 수 있으며 새 주행을 시작하면 이전 주행 결과를 대체합니다.",
        "저장한 설정은 Android의 앱 정보에서 앱 데이터를 삭제하거나 앱을 제거하면 삭제됩니다. 앱은 Android 자동 백업을 사용하지 않습니다. 개발자 서버에 주행 데이터나 사용자 계정이 없으므로 별도의 계정 삭제 절차는 없습니다."
      ]
    },
    {
      "title": "5. 이용자의 선택과 문의",
      "paragraphs": [
        "Android 설정에서 앱 권한과 저장 데이터를 관리할 수 있습니다. 개인정보 열람·정정·삭제 또는 처리 관련 문의는 아래 이메일로 보내 주세요. 개발자가 보유한 문의 정보에 관해서는 요청 확인 후 관계 법령에 따라 처리합니다. Google이 처리하는 정보에 관한 요청은 Google의 개인정보 관리 기능과 문의 절차를 이용할 수 있습니다."
      ],
      "contact": [
        "개발자 및 개인정보 문의 담당: kjh",
        "이메일: wlsgur0726@gmail.com"
      ],
      "email": "wlsgur0726@gmail.com"
    },
    {
      "title": "6. 이 페이지 방문 시 정보 처리",
      "paragraphs": [
        "이 방침 페이지는 GitHub Pages에서 제공됩니다. 페이지 자체에는 광고·방문 분석 스크립트, 외부 글꼴, 입력 양식 또는 쿠키 저장 기능을 넣지 않았습니다. 호스팅 제공자인 GitHub는 서비스 제공과 보안을 위해 IP 주소 등 접속 정보를 처리할 수 있습니다. 자세한 사항은 GitHub 개인정보처리방침을 확인해 주세요."
      ],
      "links": [
        {
          "text": "GitHub 개인정보처리방침",
          "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
        }
      ]
    },
    {
      "title": "7. 방침 변경",
      "paragraphs": [
        "앱 기능이나 정보 처리 방식이 변경되면 이 페이지를 갱신하고 시행일을 표시합니다. 법령에 따라 별도 고지가 필요한 변경은 해당 절차를 따릅니다."
      ]
    }
  ],
  "footer": "© kjh · 속도계와 나침반"
};
