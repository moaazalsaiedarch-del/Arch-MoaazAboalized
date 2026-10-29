# Arch-Moaaz Aboualized - تطبيق أندرويد (حصر التشطيبات)

## المتطلبات (مرة واحدة على الكمبيوتر)
1. Node.js (إصدار 18 أو أحدث): https://nodejs.org
2. Android Studio (يثبّت معه Java وأدوات أندرويد): https://developer.android.com/studio
   افتحه مرة وسيحمّل المكونات المطلوبة.

## خطوات بناء الـ APK
افتح الطرفية (Terminal / CMD) داخل هذا المجلد ونفّذ بالترتيب:

    npm install
    npx cap add android
    npm run sync

ثم أحد الطريقين:

**الطريقة 1: من Android Studio**

    npx cap open android

ثم من القائمة: Build > Build Bundle(s) / APK(s) > Build APK(s).
عند الانتهاء اضغط locate لفتح مكان الملف app-debug.apk.

**الطريقة 2: من الطرفية**

    cd android
    ./gradlew assembleDebug        (على ويندوز: gradlew.bat assembleDebug)

الملف الناتج: android/app/build/outputs/apk/debug/app-debug.apk

## التثبيت على الموبايل
انقل app-debug.apk إلى الموبايل (كابل أو واتساب أو Drive) وافتحه، واسمح بالتثبيت من هذا المصدر عند الطلب.

## ملاحظات
- التطبيق يعمل بدون إنترنت، والبيانات تُحفظ داخل التطبيق على الجهاز.
- تصدير Excel وPDF وJPG يفتح قائمة المشاركة في أندرويد: اختر "حفظ في الملفات" أو Drive أو واتساب.
- عند تعديل ملف www/index.html نفّذ: npm run sync ثم أعد البناء.
- هذا APK للتجربة والاستخدام الشخصي (debug). للنشر على Google Play يلزم توقيع ملف release.

## بدون Android Studio: بناء APK على GitHub (مجاني)
1. أنشئ حسابًا على github.com ثم مستودعًا جديدًا (New repository).
2. ارفع كل محتويات هذا المجلد إلى المستودع (Add file > Upload files) بما فيها المجلد المخفي .github
3. افتح تبويب Actions وانتظر انتهاء Build APK (حوالي 5 إلى 10 دقائق).
4. افتح تبويب Releases (يمين الصفحة) وحمّل app-debug.apk مباشرة على الموبايل وثبّته.
