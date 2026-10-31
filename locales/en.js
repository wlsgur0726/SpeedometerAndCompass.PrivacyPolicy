window.policyLocales ??= {};
window.policyLocales.en = {
  "languageName": "English",
  "title": "Privacy Policy",
  "pageTitle": "Privacy Policy · Speedometer and Compass",
  "description": "Privacy policy for Speedometer and Compass",
  "appName": "Speedometer and Compass · 속도계와 나침반",
  "skipToContent": "Skip to content",
  "languageSelection": "Language",
  "effectiveDate": {
    "label": "Effective and last updated:",
    "iso": "2026-10-31",
    "text": "October 31, 2026"
  },
  "introduction": [
    "kjh (“the developer”) provides this policy for the Android app Speedometer and Compass (속도계와 나침반), package com.kjh.speedometerandcompass."
  ],
  "sections": [
    {
      "title": "1. Information and purposes",
      "paragraphs": [
        "The app requires no account. The developer does not operate a server that collects ride records or GPS coordinates."
      ],
      "table": {
        "caption": "Information used by app features",
        "headers": [
          "Information",
          "Purpose",
          "Storage"
        ],
        "rows": [
          [
            "Precise location (latitude and longitude), GPS speed, accuracy, and measurement time",
            "Calculate current speed, distance, ride time, and statistics",
            "Processed in device memory. Ride records are not saved to files or developer servers."
          ],
          [
            "Magnetic field and accelerometer readings",
            "Calculate the direction the phone is pointing",
            "Processed on the device and not sent to developer servers."
          ],
          [
            "Language, ride, display, and notification settings",
            "Remember your preferences",
            "Stored in the app's local device storage."
          ],
          [
            "Email address and inquiry content",
            "Respond and resolve issues when you contact us by email",
            "Kept as needed to handle your inquiry; unnecessary information is deleted after resolution, subject to legally required retention."
          ]
        ]
      }
    },
    {
      "title": "2. Location access and ride notifications",
      "paragraphs": [
        "With precise location permission, the app calculates current speed and location-based information while the ride screen is visible. Location access may occur before you start a ride. During a ride you initiate, an Android location foreground service continues tracking when the screen is off or you switch to another app.",
        "You can revoke location permission or turn off device location in Android settings. GPS speed and distance features will then be unavailable. Ride recording can operate without the optional ride notification permission; system indications of a running service may remain depending on your Android version and settings."
      ]
    },
    {
      "title": "3. Google AdMob and third parties",
      "paragraphs": [
        "The app displays banner ads using Google AdMob (Google Mobile Ads SDK). For advertising, measurement, analytics, and fraud prevention, the SDK may collect and share with Google and advertising services: IP addresses (which may estimate approximate location), interactions such as ad impressions and taps, diagnostic information, and device identifiers such as the Android advertising ID and app set ID. Actual processing depends on the SDK version, device and ad settings, and applicable consent status.",
        "The app code does not directly attach GPS coordinates or sensor readings used for ride calculations to ad requests. See the Google Privacy Policy, How Google uses information from partner services, and Google's SDK data disclosure.",
        "Google may process information on servers outside your country. Google's policies explain its retention, deletion, and international transfers. Deleting local app data does not delete data already processed by Google. You can reset or delete your advertising ID in Android's advertising settings where available; menus and features vary by device."
      ],
      "links": [
        {
          "text": "Google Privacy Policy",
          "url": "https://policies.google.com/privacy?hl=en"
        },
        {
          "text": "How Google uses information from partner services",
          "url": "https://policies.google.com/technologies/partner-sites?hl=en"
        },
        {
          "text": "Google's SDK data disclosure",
          "url": "https://developers.google.com/admob/android/privacy/play-data-disclosure"
        }
      ]
    },
    {
      "title": "4. Retention and deletion",
      "paragraphs": [
        "Ride information remains only in the app process's memory and is not restored after process termination, force stopping, or restarting the device. Completed ride results may remain visible while the process stays alive; starting a new ride replaces the previous results.",
        "Clear the app's storage in Android settings or uninstall it to remove saved preferences. The app disables Android automatic backup. There is no separate account deletion process because the app has no user accounts or ride data on developer servers."
      ]
    },
    {
      "title": "5. Your choices and contact",
      "paragraphs": [
        "Manage permissions and local data in Android settings. Contact us below for privacy questions or requests to access, correct, or delete inquiry information held by the developer. We will review requests and respond in accordance with applicable law. Use Google's privacy controls and contact procedures for information processed by Google."
      ],
      "contact": [
        "Developer and privacy contact: kjh",
        "Email: wlsgur0726@gmail.com"
      ],
      "email": "wlsgur0726@gmail.com"
    },
    {
      "title": "6. Visiting this page",
      "paragraphs": [
        "This page is hosted on GitHub Pages. It contains no ads, analytics scripts, external fonts, forms, or cookie storage features. GitHub may process access information such as IP addresses to provide and secure hosting. See the GitHub Privacy Statement."
      ],
      "links": [
        {
          "text": "GitHub Privacy Statement",
          "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
        }
      ]
    },
    {
      "title": "7. Policy updates",
      "paragraphs": [
        "We update this page and its effective date when app features or data practices change. Where required by law, we will provide additional notice."
      ]
    }
  ],
  "footer": "© kjh · Speedometer and Compass"
};
