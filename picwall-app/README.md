# 照片墙 Capacitor 打包

## 前置条件
- Node.js 18+
- Android: Android Studio + JDK 17
- iOS: Xcode (仅 macOS)

## 快速开始

```bash
cd picwall-app
npm install

# Android APK
npm run add:android    # 首次
npm run build:android  # 编译

# iOS (仅 macOS)
npm run add:ios
npm run open:ios       # Xcode 里 build
```

APK 输出: `android/app/build/outputs/apk/debug/app-debug.apk`