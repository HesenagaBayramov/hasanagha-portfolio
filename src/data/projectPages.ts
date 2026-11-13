export const projectPages = {
  en: {
    navHome: 'Home', navProjects: 'Projects', navContact: 'Contact', themeLight: 'Light mode', themeDark: 'Dark mode',
    indexLabel: 'PROJECT INDEX / 01', indexTitle: 'Projects, explained.',
    indexIntro: 'A closer look at the ideas, decisions, and outcomes behind my work. Written for visitors who want the story before the source code.',
    featured: 'FEATURED / UNIVERSITY SECURITY LAB', visualCaption: 'CAMPUSSECURE LOGIN SCREEN', loginAlt: 'CampusSecure university portal login page with username and password fields.', indexProjectIntro: 'A fictional student portal built to make access control visible and testable.',
    indexProjectDetail: 'Compare the same three actions in secure and intentionally vulnerable modes to see why server-side authorization matters.',
    viewCaseStudy: 'Explore the project', repository: 'View GitHub repository',
    oneProject: 'One documented project so far. More case studies will appear here as they are ready.',
    detailLabel: 'CASE STUDY / UNIVERSITY SECURITY LAB', detailTitle: 'CampusSecure',
    detailIntro: 'What happens when a student portal trusts the wrong user, action, or field? CampusSecure makes those checks easy to compare in a controlled lab.',
    backToProjects: 'All projects', projectPurpose: 'The idea',
    purposeTitle: 'A familiar portal with a focused security question.',
    purposeBody: 'CampusSecure is a fictional university portal where students can view requests and edit contact details, while administrators manage announcements and approvals. The project asks whether the server checks who may access a record, perform an action, or change a sensitive field.',
    howLabel: 'HOW IT WORKS', howTitle: 'One application. Two modes.',
    howIntro: 'The interface and routes stay the same. A secure mode enforces three authorization decisions; an intentionally vulnerable mode relaxes those decisions for comparison.',
    secure: 'Secure mode', secureDetail: 'The server rejects actions outside the user’s permissions.',
    vulnerable: 'Vulnerable mode', vulnerableDetail: 'Only the three documented API checks are relaxed.',
    scenariosLabel: 'THREE CONTROLLED SCENARIOS', scenariosTitle: 'What gets tested?',
    scenarios: [
      { number: '01', title: 'Another student’s record', question: 'Can Alice read a request belonging to Bob?', contrast: 'Secure: denied · Vulnerable: record returned', principle: 'Object access' },
      { number: '02', title: 'An admin-only action', question: 'Can Alice create an announcement reserved for administrators?', contrast: 'Secure: denied · Vulnerable: announcement saved', principle: 'Function access' },
      { number: '03', title: 'A protected account field', question: 'Can Alice submit an admin role while updating her profile?', contrast: 'Secure: denied · Vulnerable: role changed', principle: 'Field access' }
    ],
    takeawayLabel: 'THE TAKEAWAY', takeawayTitle: 'The lesson is in the server response.',
    takeawayBody: 'A page can hide a button or field, but that alone does not protect the underlying action. This lab compares the server response and saved data so each authorization decision is observable.',
    scopeLabel: 'LAB SCOPE', scopeBody: 'This is an isolated academic exercise using fictional accounts and records. It is not a public target or a live university system.',
    capturesLabel: 'REAL LAB CAPTURES', capturesTitle: 'What the lab looked like.',
    capturesIntro: 'These images come from local, isolated lab runs. Select an image to inspect it in the gallery. Session and local network values are masked.',
    galleryLabel: 'LAB GALLERY', galleryOpen: 'view in gallery', galleryClose: 'Close gallery', galleryPrevious: 'Previous image', galleryNext: 'Next image', galleryZoom: 'Zoom in', galleryFit: 'Fit image',
    captures: [
      { src: '/projects/campussecure/student-dashboard.webp', width: 1825, height: 884, title: 'Student portal', alt: 'CampusSecure student dashboard showing Alice’s account, requests, and announcements.', caption: 'The fictional student dashboard gives the scenarios a familiar setting.' },
      { src: '/projects/campussecure/object-access-redacted.webp', width: 1480, height: 470, title: 'Object access', alt: 'Burp Repeater capture of GET /api/requests/201 returning HTTP 200 with a record for student ID 2.', caption: 'An API request for record 201 returns another student’s fictional record in the captured vulnerable-mode run.' },
      { src: '/projects/campussecure/admin-action-redacted.webp', width: 1480, height: 480, title: 'Admin-only action', alt: 'Burp Repeater capture of POST /api/admin/announcements returning HTTP 201 Created.', caption: 'The captured API response shows an announcement being created through the admin endpoint.' }
    ],
    sourceLabel: 'SOURCE & EVIDENCE', sourceTitle: 'Want the technical detail?',
    sourceBody: 'The repository contains the application, setup guide, scenario descriptions, and automated tests. A demonstration video has not been published for this project.',
    footer: 'Hasanagha Bayramov · Aspiring Penetration Tester'
  },
  az: {
    navHome: 'Ana səhifə', navProjects: 'Layihələr', navContact: 'Əlaqə', themeLight: 'Açıq rejim', themeDark: 'Tünd rejim',
    indexLabel: 'LAYİHƏLƏR / 01', indexTitle: 'Layihələrə yaxından baxış.',
    indexIntro: 'İşlərimin arxasındakı ideya, qərar və nəticələrə daha yaxından baxış. Koddan əvvəl layihənin məğzini anlamaq istəyənlər üçün.',
    featured: 'SEÇİLMİŞ / UNİVERSİTET TƏHLÜKƏSİZLİK LABI', visualCaption: 'CAMPUSSECURE GİRİŞ EKRANI', loginAlt: 'İstifadəçi adı və parol sahələri olan CampusSecure universitet portalının giriş səhifəsi.', indexProjectIntro: 'Girişə nəzarəti görünən və yoxlanıla bilən etmək üçün qurulmuş nümunə tələbə portalı.',
    indexProjectDetail: 'Server tərəfində icazə yoxlamasının niyə vacib olduğunu görmək üçün eyni üç əməliyyatı təhlükəsiz və qəsdən zəifləşdirilmiş rejimlərdə müqayisə edin.',
    viewCaseStudy: 'Layihəni öyrən', repository: 'GitHub repozitoriyasına bax',
    oneProject: 'Hələlik ətraflı təqdim edilmiş bir layihə var. Yeni işlər hazır olduqca burada görünəcək.',
    detailLabel: 'LAYİHƏ İZAHI / UNİVERSİTET TƏHLÜKƏSİZLİK LABI', detailTitle: 'CampusSecure',
    detailIntro: 'Tələbə portalı yanlış istifadəçiyə, əməliyyata və ya sahəyə etibar edəndə nə baş verir? CampusSecure bu yoxlamaları idarə olunan laboratoriyada müqayisə etməyə imkan verir.',
    backToProjects: 'Bütün layihələr', projectPurpose: 'İDEYA',
    purposeTitle: 'Tanış portal, konkret təhlükəsizlik sualı.',
    purposeBody: 'CampusSecure nümunə universitet portalıdır: tələbələr sorğularına baxıb əlaqə məlumatlarını dəyişirlər, administratorlar isə elanları və təsdiqləri idarə edirlər. Layihə serverin qeydə baxmaq, əməliyyat etmək və həssas sahəni dəyişmək üçün icazəni yoxlayıb-yoxlamadığını araşdırır.',
    howLabel: 'İŞ PRİNSİPİ', howTitle: 'Bir tətbiq. İki rejim.',
    howIntro: 'İnterfeys və marşrutlar eyni qalır. Təhlükəsiz rejim üç icazə qərarını tətbiq edir; qəsdən zəifləşdirilmiş rejim isə müqayisə üçün həmin yoxlamaları yumşaldır.',
    secure: 'Təhlükəsiz rejim', secureDetail: 'Server istifadəçinin icazəsi olmayan əməliyyatı rədd edir.',
    vulnerable: 'Zəifləşdirilmiş rejim', vulnerableDetail: 'Yalnız sənədləşdirilmiş üç API yoxlaması yumşaldılır.',
    scenariosLabel: 'ÜÇ İDARƏ OLUNAN SSENARİ', scenariosTitle: 'Nə yoxlanılır?',
    scenarios: [
      { number: '01', title: 'Başqa tələbənin qeydi', question: 'Alice, Bob-a aid sorğunu oxuya bilirmi?', contrast: 'Təhlükəsiz: rədd edilir · Zəif: qeyd qaytarılır', principle: 'Obyektə giriş' },
      { number: '02', title: 'Yalnız admin əməliyyatı', question: 'Alice, administrator üçün nəzərdə tutulmuş elanı yarada bilirmi?', contrast: 'Təhlükəsiz: rədd edilir · Zəif: elan saxlanılır', principle: 'Funksiyaya giriş' },
      { number: '03', title: 'Qorunan hesab sahəsi', question: 'Alice profilini yeniləyərkən özünə admin rolu verə bilirmi?', contrast: 'Təhlükəsiz: rədd edilir · Zəif: rol dəyişir', principle: 'Sahəyə giriş' }
    ],
    takeawayLabel: 'NƏTİCƏ', takeawayTitle: 'Əsas fərq serverin cavabındadır.',
    takeawayBody: 'Səhifədə düyməni və ya sahəni gizlətmək həmin əməliyyatı təkbaşına qorumur. Bu laboratoriyada hər icazə qərarını görmək üçün server cavabı və saxlanılan məlumat müqayisə edilir.',
    scopeLabel: 'LABORATORİYA ÇƏRÇİVƏSİ', scopeBody: 'Bu, uydurma hesab və qeydlərlə aparılan təcrid olunmuş tədris işidir. İctimai hədəf və ya real universitet sistemi deyil.',
    capturesLabel: 'REAL LABORATORİYA GÖRÜNTÜLƏRİ', capturesTitle: 'Lab necə görünürdü?',
    capturesIntro: 'Bu görüntülər lokal və təcrid olunmuş laboratoriya sınaqlarından götürülüb. Qalereyada baxmaq üçün şəkli seçin. Sessiya və lokal şəbəkə məlumatları örtülüb.',
    galleryLabel: 'LAB QALEREYASI', galleryOpen: 'qalereyada bax', galleryClose: 'Qalereyanı bağla', galleryPrevious: 'Əvvəlki şəkil', galleryNext: 'Növbəti şəkil', galleryZoom: 'Böyüt', galleryFit: 'Sığdır',
    captures: [
      { src: '/projects/campussecure/student-dashboard.webp', width: 1825, height: 884, title: 'Tələbə portalı', alt: 'CampusSecure tələbə panelində Alice-in hesabı, sorğuları və elanlar görünür.', caption: 'Nümunə tələbə paneli ssenarilərin baş verdiyi mühiti göstərir.' },
      { src: '/projects/campussecure/object-access-redacted.webp', width: 1480, height: 470, title: 'Obyektə giriş', alt: 'Burp Repeater-də GET /api/requests/201 sorğusu HTTP 200 və tələbə ID-si 2 olan qeydi qaytarır.', caption: 'Zəif rejimdə çəkilmiş sorğuda API 201 nömrəli başqa tələbə qeydini qaytarır.' },
      { src: '/projects/campussecure/admin-action-redacted.webp', width: 1480, height: 480, title: 'Admin əməliyyatı', alt: 'Burp Repeater-də POST /api/admin/announcements sorğusu HTTP 201 Created cavabı alır.', caption: 'Bu API cavabı admin üçün nəzərdə tutulmuş endpoint vasitəsilə elanın yaradıldığını göstərir.' }
    ],
    sourceLabel: 'MƏNBƏ VƏ SÜBUT', sourceTitle: 'Texniki detallara baxmaq istəyirsiniz?',
    sourceBody: 'Repozitoriyada tətbiq, quraşdırma bələdçisi, ssenarilərin izahı və avtomatlaşdırılmış testlər var. Bu layihə üçün nümayiş videosu hələ yayımlanmayıb.',
    footer: 'Həsənağa Bayramov · Gələcək penetrasiya testçisi'
  }
} as const;
