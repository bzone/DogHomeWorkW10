(function () {
    'use strict';
    var module = angular.module('app', ['onsen']);
    var url = "http://doghomework.dev.thickmug.com";
    var currentApiKey;
    var timeinterval = 0;

    
        var l_lang;
        if (navigator.userLanguage) // Explorer
            l_lang = navigator.userLanguage;
        else if (navigator.language) // FF
            l_lang = navigator.language;
        else
            l_lang = "en";
    
    
    
    

    module.controller('AppController', function ($scope, $projekty, $filter) {
        $scope.currentPage = "Home";
        $scope.date = new Date();
        $scope.detectLang = l_lang;


        
        
        
$scope.langpl = {
    p_easy:'ŁATWY',
    p_medium:'ŚREDNI',
    p_hard:'TRUDNY',
    day_text: 'Dzień',
    days_text: 'dni',
    finished: 'UKOŃCZONO',
    rounds_text: 'rundy',
    menu_logout: 'Wyloguj',
    level_of_completion: 'STOPIEŃ UKOŃCZENIA',
    date_text: 'data',
    login_or: 'lub',
    app_name:'DogHomework',
    transition_name_namefield:'transition:NAMEFIELD',
    transition_name_passfield:'transition:PASSFIELD',
    transition_name_button:'transition:BUTTON',
    transition_name_logo:'transition:LOGO',
    transition_name_fab:'transition:FAB',
    transition_name_fab2:'transition:FAB2',
    login_text_password:'hasło',
    login_text_email:'e-mail',
    login_text_login:'ZALOGUJ SIĘ',
    login_text_create_new_account:'UTWÓRZ NOWE KONTO',
    login_text_forgotten_password:'nie pamiętasz hasła?',
    action_settings:'Settings',
    login_text_bad_credentials:'Login lub hasło niepoprawne!',
    login_text_no_account:'Login lub hasło niepoprawne!',
    create_account_text_creating_account:'Tworzę konto...',
    gothamBold:'"fonts/GothamRnd-Bold.otf"',
    gothamLight:'"fonts/GothamRnd-Light.otf"',
    drawer_open:'',
    drawer_close:'',
    friend_profile_text_profile_doesnt_exist:'Błąd! Profil użytkownika nie istnieje!',
    password_text_description:'Jeśli zapomniałeś swojego hasła, podaj nam swój adres e-mail, który podałeś przy rejestracji, a wyślemy Ci maila z nowym hasłem!',
    password_text_recover_my_password:'PRZYPOMNIJ MI HASŁO',
    password_text_title:'PRZYPOMNIENIE HASŁA',
    create_account_text_title:'NOWE KONTO',
    create_account_text_password_again:'powtórz hasło',
    create_account_text_button_next_step:'DALEJ',
    create_account_text_step1:'ETAP 1 z 5',
    create_account_text_login_data:'DANE DO LOGOWANIA',
    create_account_text_step2:'ETAP 2 z 5',
    create_account_text_name_and_surname:'Imię i nazwisko',
    create_account_text_city:'miejscowość',
    create_account_text_street_text:'ulica',
    create_account_text_house_number:'nr domu/nr lokalu',
    create_account_text_phone_number:'telefon kontaktowy',
    create_account_text_warning_input_incorrect:'Uzupełnij poprawnie wszystkie pola!',
    create_account_text_step3:'ETAP 3 z 5',
    create_account_text_dog_info:'INFORMACJE O PSIE',
    create_account_text_dog_name:'imię',
    create_account_text_breed_text:'rasa',
    create_account_text_sex:'płeć',
    create_account_text_sex_type1:'suka',
    text_select:'wybierz',
    create_account_text_bithdate:'data urodzenia',
    create_account_text_sterile:'sterylizacja',
    yes_text:'tak',
    no_text:'nie',
    bitch_text:'suka',
    dog_text:'pies',
    create_account_text_chip:'chip',
    create_account_text_step4:'ETAP 4 z 5',
    create_account_text_vaccination:'SZCZEPIENIA',
    create_account_text_illness_1:'wścieklizna',
    create_account_text_illness2:'nosówka',
    create_account_text_vaccination_date:'data szczepienia',
    create_account_text_task1:'noga',
    create_account_text_task2:'siad',
    create_account_text_task3:'leżeć',
    create_account_text_task4:'waruj',
    create_account_text_task5:'turlaj się',
    create_account_text_school:'SZKOLENIA',
    create_account_text_step5:'ETAP 5 z 5',
    create_account_text_step6:'ETAP 6 z 6',
    create_account_text_avatar:'AWATAR',
    create_Account_text_finish:'ZAKOŃCZ',
    create_account_text_set_avatar:'USTAW AWATAR',
    image_chooser_text_camera:'Zrób zdjęcie aparatem',
    image_chooser_text_gallery:'Wybierz zdjęcie z galerii',
    text_ok:'OK',
    text_cancel:'COFNIJ',
    no_photo_text_are_you_sure:'Czy na pewno nie chcesz dodać zdjęcia swojego pupila?',
    no_photo_text_change_anytime_in_options:'Przejdź w dowolnym momencie do ekranu Aktualizacja danych, by zmienić awatar.',
    hello_blank_fragment:'Hello blank fragment',
    trainings_text_no_trainings:'Nie masz żadnych szkoleń. Dodaj nowe lub kup.',
    trainings_text_title:'SZKOLENIA',
    training_text_training:'SZKOLENIE',
    training_text_you_will_need:'BĘDZIESZ POTRZEBOWAŁ:',
    trainings_text_buy_more_lessons:'kup dodatkowe zestawy\nszkoleniowe',
    dog_profile_text_dog_card:'KARTA PSA',
    dog_card_text_breed:'RASA:',
    dog_card_text_owner:'WŁAŚCICIEL: ',
    trainings_section_text_trainings_done:'skończone szkolenia',
    dog_card_text_stats_text:'statystyki',
    dog_card_text_zdrowie:'ZDROWIE',
    dog_card_text_trainings:'SZKOLENIA',
    dog_card_text_basic_data:'dane podstawowe',
    dog_card_text_owner_info:'dane właściciela',
    dog_card_text_vacc_info:'szczepienia',
    dog_card_text_behavioral_info:'opis behawiorystyczny',
    text_chapters:'ETAPY',
    text_days_count:'ILOŚĆ DNI',
    update_text_save_changes:'ZAPISZ ZMIANY',
    update_text_share_social:'Sieci społecznościowe',
    update_text_share_nfc:'Udostępnij przez NFC',
    update_text_show_Qr:'Kod QR Twojego psa',
    dog_friends_text_no_dogs:'Nie masz dodanych żadnych psów znajomych. Dodaj przez NFC lub zeskanuj ich kod QR.',
    dog_friends_text_title:'PSY ZNAJOMYCH',
    qr_code_text_title:'SKANER QR-CODE',
    buy_text_title:'KUP ZESTAWY',
    dog_added_text_desc:'Przejdź w dowolnym momencie do ekranu Psy Twoich znajomych by śledzić postęp w szkoleniu psa.',
    ar_text_title:'TRYB AR',
    nfc_text_title:'Udostępnianie karty psa przez NFC',
    nfc_text_desc:'Zbliż teraz drugi telefon do nadajnika NFC tego telefonu i kliknij w ekran by przesłać kartę Twojego psa.',
    nfc_text_title2:'Dodawanie psa przez NFC',
    create_text_title:'UTWÓRZ ZESTAW',
    create_text_target:'twój cel/czego chcesz nauczyć psa',
    create_text_settings:'ustawienia',
    create_training_text_create_button:'STWÓRZ',
    player_text_start:'START',
    player_text_finish:'ZAKOŃCZ',
    weight_text:'waga',
    name_text:'Imię',
    last_name_text:'nazwisko',
    city_Text:'miasto',
    street_text:'ulica',
    phone_text:'telefon',
    type_desc_text:'Wpisz tutaj opis',
    settings_text_settings_saved:'USTAWIENIA ZAPISANE!',
    settings_text_settings_not_saved:'Błąd! Nie zapisano ustawień!',
    dog_already_added_text:'Ten pies jest już dodany!',
    dog_not_exist_text:'Ten pies nie istnieje!',
    title_stopwatch:'STOPER',
    stop_text:'STOP',
    round_text:'RUNDA',
    start_text:'START',
    title_notifications:'PODSUMOWANIE DNIA',
    update_text_change_avatar:'ZMIEŃ AWATAR',
    update_text_title:'AKTUALIZACJA DANYCH',
    dog_added_text_title:'DODANO PSA',
    toast_item_bought_in_list:'Your item is available in the courses list!',
    toast_item_already_bought:'Item already bought!',
    menu_courses:'Szkolenia',
    menu_dog_info:'Karta Twojego psa',
    menu_dogs_friends:'Psy Twoich znajomych',
    menu_stopwatch:'Stoper',
    menu_qrcode:'Skaner QR-CODE',
    menu_ar:'Narzędzie AR',
    menu_update:'Aktualizacja danych',
    fab_menu_create_new_set:'Utwórz nowy zestaw',
    fab_menu_buy_new_set:'Kup nowy zestaw',
    fab_menu_create_auto:'Automatycznie dopasuj zestaw',
    text_chapter:'ETAP',
    text_target_course:'CEL SZKOLENIA:',
    text_Show_movie:'POKAŻ FILMIK',
    text_increase_speed:'Zwiększ tempo!',
    text_current_round:'OBECNA RUNDA',
    text_round:'Runda',
    title_your_dog:'TWÓJ PIES',
    title_shared_card:'UDOSTĘPNIONA KARTA',
    text_basic_trainings:'podstawowe szkolenia',
    text_courses_finished:'ukończone zestawy',
    text_days_of_trainings:'ilość dni na szkoleniach',
    text_registration:'rejestracja',
    text_age:'wiek',
    text_birth_Date:'data urodzenia',
    text_sex:'płeć',
    text_weight:'waga',
    text_sterilization:'sterylizacja',
    text_has_chip:'posiada chip',
    text_city:'miasto',
    text_street:'ulica',
    text_house_number:'nr domu/nr lokalu',
    text_phone:'telefon',
    text_rabbies_from:'wścieklizna',
    text_worms:'odrobaczenie',
    text_from:'"do "',
    text_suggested_training:'sugerowane szkolenie:\nchodzenie przy nodze',
    text_yes:'tak',
    text_no:'nie',
    add_via_nfx:'Dodaj przez NFC',
    text_scan_qr_code:'Zeskanuj kod QR psa',
    text_points_earned:'punkty za szkolenia',
    add_to_friends:'Dodaj do znajomych'
	}

$scope.langen = {
    p_easy:'EASY',
    p_medium:'MEDIUM',
    p_hard:'HARD',
    day_text: 'Day',
       days_text: 'days',
    finished: 'FINISHED',
     rounds_text: 'rounds',
    menu_logout: 'Logout',
    level_of_completion: 'COMPLETION',
    date_text: 'date',
    login_or: 'or',
    app_name:'DogHomework',
    transition_name_namefield:'transition:NAMEFIELD',
    transition_name_passfield:'transition:PASSFIELD',
    transition_name_button:'transition:BUTTON',
    transition_name_logo:'transition:LOGO',
    transition_name_fab:'transition:FAB',
    transition_name_fab2:'transition:FAB2',
    login_text_password:'password',
    login_text_email:'e-mail',
    login_text_login:'LOG IN',
    login_text_create_new_account:'CREATE NEW ACCOUNT',
    login_text_forgotten_password:'forgot a passoword?',
    action_settings:'Settings',
    login_text_bad_credentials:'Login or password is incorect!',
    login_text_no_account:'Login or password is incorect!',
    create_account_text_creating_account:'Creating account...',
    gothamBold:'"fonts/GothamRnd-Bold.otf"',
    gothamLight:'"fonts/GothamRnd-Light.otf"',
    drawer_open:'',
    drawer_close:'',
    friend_profile_text_profile_doesnt_exist:'Error! Profile doesn\'t exists!',
    password_text_description:'If you forgot your password, type your e-mail address that you provided at registration and we\'ll send you an email with new password!',
    password_text_recover_my_password:'RECOVER MY PASSWORD',
    password_text_title:'PASSWORD RECOVERY',
    create_account_text_title:'NEW ACCOUNT',
    create_account_text_password_again:'repeat password',
    create_account_text_button_next_step:'NEXT',
    create_account_text_step1:'STEP 1 of 6',
    create_account_text_login_data:'LOGIN DATA',
    create_account_text_step2:'SEP 2 OF 6',
    create_account_text_name_and_surname:'Name and Surname',
    create_account_text_city:'city',
    create_account_text_street_text:'street',
    create_account_text_house_number:'house/apartment number',
    create_account_text_phone_number:'phone number',
    create_account_text_warning_input_incorrect:'All fields are required!',
    create_account_text_step3:'STEP 3 of 6',
    create_account_text_dog_info:'DOG INFORMATION',
    create_account_text_dog_name:'Dog\'s name',
    create_account_text_breed_text:'breed',
    create_account_text_sex:'sex',
    create_account_text_sex_type1:'bitch',
    text_select:'select',
    create_account_text_bithdate:'date of birth',
    create_account_text_sterile:'sterilization',
    yes_text:'yes',
    no_text:'no',
    bitch_text:'bitch',
    dog_text:'dog',
    create_account_text_chip:'chip',
    create_account_text_step4:'STEP 4 of 6',
    create_account_text_vaccination:'VACCINATIONS',
    create_account_text_illness_1:'rabies',
    create_account_text_illness2:'nasal',
    create_account_text_vaccination_date:'vaccination date',
    create_account_text_task1:'paw',
    create_account_text_task2:'sit',
    create_account_text_task3:'lie',
    create_account_text_task4:'charge',
    create_account_text_task5:'rolling',
    create_account_text_school:'TRAININGS',
    create_account_text_step5:'STEP 5 of 6',
    create_account_text_step6:'STEP 6 of 6',
    create_account_text_avatar:'AVATAR',
    create_Account_text_finish:'FINISH',
    create_account_text_set_avatar:'SET AVATAR',
    image_chooser_text_camera:'Take a photo with camera',
    image_chooser_text_gallery:'Select a photo from gallery',
    text_ok:'OK',
    text_cancel:'CANCEL',
    no_photo_text_are_you_sure:'Are you sure you don\'t want to add photo of your pet?',
    no_photo_text_change_anytime_in_options:'Return at any time to UPDATE screen to change the avatar.',
    hello_blank_fragment:'Hello blank fragment',
    trainings_text_no_trainings:'You do not have any trainings. Add new or buy.',
    trainings_text_title:'TRAININGS',
    training_text_training:'TRAINING',
    training_text_you_will_need:'YOU WILL NEED:',
    trainings_text_buy_more_lessons:'BUY NEW\ntraining lessons',
    dog_profile_text_dog_card:'DOG CARD',
    dog_card_text_breed:'"BREED: "',
    dog_card_text_owner:'"OWNER: "',
    trainings_section_text_trainings_done:'COMPLETED TRAININGS',
    dog_card_text_stats_text:'statistics',
    dog_card_text_zdrowie:'HEALTH',
    dog_card_text_trainings:'TRAININGS',
    dog_card_text_basic_data:'basic data',
    dog_card_text_owner_info:'owner info',
    dog_card_text_vacc_info:'vaccination',
    dog_card_text_behavioral_info:'behavioral info',
    text_chapters:'CHAPTERS',
    text_days_count:'DAYS COUNT',
    update_text_save_changes:'SAVE CHANGES',
    update_text_share_social:'Social Networking',
    update_text_share_nfc:'Share via NFC',
    update_text_show_Qr:'Your dog\'s QR Code',
    dog_friends_text_no_dogs:'You do not have added any dogs of your friends',
    dog_friends_text_title:'FRIENDS\' DOGS',
    qr_code_text_title:'QR-CODE SCANNER',
    buy_text_title:'BUY SETS',
    dog_added_text_desc:'Return at any time to FRIENDS\' DOGS to track the progress in training a dog..',
    ar_text_title:'AR MODE',
    nfc_text_title:'Dog\'s card sharing via NFC',
    nfc_text_desc:'Move second phone to NFC transmitter of first phone now and tap the screen to send your dog\'s card.',
    nfc_text_title2:'Dog add via NFC',
    create_text_title:'CREATE SET',
    create_text_target:'your goal/what do you want to teach your dog',
    create_text_settings:'settings',
    create_training_text_create_button:'CREATE',
    player_text_start:'START',
    player_text_finish:'FINISH',
    weight_text:'weight',
    name_text:'name',
    last_name_text:'last name',
    city_Text:'city',
    street_text:'street',
    phone_text:'phone',
    type_desc_text:'description',
    settings_text_settings_saved:'SETTINGS SAVED!',
    settings_text_settings_not_saved:'Error! Settings has\'t been saved!',
    dog_already_added_text:'Dog is already added!',
    dog_not_exist_text:'Dog is not exists',
    title_stopwatch:'STOPWATCH',
    stop_text:'STOP',
    round_text:'ROUND',
    start_text:'START',
    title_notifications:'DAY SUMMARY',
    update_text_change_avatar:'CHANGE AVATAR',
    update_text_title:'UPDATE INFO',
    dog_added_text_title:'DOG ADDED',
    toast_item_bought_in_list:'Your item is available in the courses list!',
    toast_item_already_bought:'Item already bought!',
    menu_courses:'Courses',
    menu_dog_info:'Your dog\'s profile',
    menu_dogs_friends:'Your friends\' dogs',
    menu_stopwatch:'Stopwatch',
    menu_qrcode:'QR-CODE scanner',
    menu_ar:'AR mode',
    menu_update:'Update info',
    fab_menu_create_new_set:'Create new course',
    fab_menu_buy_new_set:'Buy new courses',
    fab_menu_create_auto:'Auto-generate new course',
    text_chapter:'"CHAPTER "',
    text_target_course:'COURSE AIM:',
    text_Show_movie:'SHOW VIDEO',
    text_increase_speed:'Increase training tempo!',
    text_current_round:'"CURRENT ROUND "',
    text_round:'"Round "',
    title_your_dog:'YOUR DOG',
    title_shared_card:'SHARED CARD',
    text_basic_trainings:'basic trainings',
    text_courses_finished:'trainings done',
    text_days_of_trainings:'days on training',
    text_registration:'registration',
    text_age:'age',
    text_birth_Date:'birth date',
    text_sex:'sex',
    text_weight:'weight',
    text_sterilization:'sterilization',
    text_has_chip:'has chip',
    text_city:'city',
    text_street:'street',
    text_house_number:'house number',
    text_phone:'phone',
    text_rabbies_from:'rabies',
    text_worms:'worms',
    text_from:'"to "',
    text_suggested_training:'suggested training:\nchodzenie przy nodze',
    text_yes:'yes',
    text_no:'no',
    add_via_nfx:'Add via NFC',
    text_scan_qr_code:'Scan dog\'s QR-Code',
     text_points_earned:'points from curses',
    add_to_friends:'Add to friends'
}
$scope.langde = {
     p_easy:'einfach',
    p_medium:'Mittel',
    p_hard:'hart',
    day_text: 'Tag',
    days_text: 'Tage',
    finished: 'FERTIG',
     rounds_text: 'Runde',
    menu_logout: 'Ausloggen',
    level_of_completion: 'FERTIGSTELLUNG',
    date_text: 'Datum',
    login_or: 'oder',
    app_name:'DogHomework',
    transition_name_namefield:'transition:NAMEFIELD',
    transition_name_passfield:'transition:PASSFIELD',
    transition_name_button:'transition:BUTTON',
    transition_name_logo:'transition:LOGO',
    transition_name_fab:'transition:FAB',
    transition_name_fab2:'transition:FAB2',
    login_text_password:'Passwort',
    login_text_email:'e-mail',
    login_text_login:'EINLOGGEN',
    login_text_create_new_account:'NEUEN ACCOUNT ERSTELLEN',
    login_text_forgotten_password:'vergessen ein Passwort?',
    action_settings:'Einstellungen',
    login_text_bad_credentials:'Login oder Passwort ist nicht korrekt!',
    login_text_no_account:'Login oder Passwort ist nicht korrekt!',
    create_account_text_creating_account:'Account erstellen...',
    gothamBold:'"fonts/GothamRnd-Bold.otf"',
    gothamLight:'"fonts/GothamRnd-Light.otf"',
    drawer_open:'',
    drawer_close:'',
    friend_profile_text_profile_doesnt_exist:'Fehler! Profil existiert nicht!',
    password_text_description:'Wenn Sie Ihr Passwort vergessen haben, geben Sie Ihre E-Mail-Adresse, die Sie bei der Registrierung zur Verfügung gestellt, und wir werden Ihnen eine E-Mail mit neues Passwort zusenden!',
    password_text_recover_my_password:'GENESEN MEIN PASSWORT',
    password_text_title:'PASSWORT-WIEDERHERSTELLUNG',
    create_account_text_title:'NEUES KONTO',
    create_account_text_password_again:'Passwort wiederholen',
    create_account_text_button_next_step:'NÄCHSTER',
    create_account_text_step1:'Schritt 1 von 6',
    create_account_text_login_data:'Login-Daten',
    create_account_text_step2:'Schritt 2 von 6',
    create_account_text_name_and_surname:'Name und Nachname',
    create_account_text_city:'Stadt',
    create_account_text_street_text:'Strasse',
    create_account_text_house_number:'Haus/Wohnung',
    create_account_text_phone_number:'Telefonnummer',
    create_account_text_warning_input_incorrect:'Alle Felder sind erforderlich!',
    create_account_text_step3:'Schritt 3 von 6',
    create_account_text_dog_info:'HUND INFORMATIONEN',
    create_account_text_dog_name:'Name des Hund',
    create_account_text_breed_text:'Rasse',
    create_account_text_sex:'sex',
    create_account_text_sex_type1:'hündin',
    text_select:'wählen',
    create_account_text_bithdate:'geburtsdatum',
    create_account_text_sterile:'sterilisation',
    yes_text:'ja',
    no_text:'nein',
    bitch_text:'hündin',
    dog_text:'hund',
    create_account_text_chip:'chip',
    create_account_text_step4:'Schritt 4 von 6',
    create_account_text_vaccination:'IMPFUNGEN',
    create_account_text_illness_1:'Tollwut',
    create_account_text_illness2:'nasal',
    create_account_text_vaccination_date:'Impfdatum',
    create_account_text_task1:'pfote',
    create_account_text_task2:'sitzen',
    create_account_text_task3:'lüge',
    create_account_text_task4:'berechnen',
    create_account_text_task5:'roll',
    create_account_text_school:'AUSBILDUNG',
    create_account_text_step5:'Schritt 5 von 6',
    create_account_text_step6:'Schritt 6 von 6',
    create_account_text_avatar:'BENUTZERBILD',
    create_Account_text_finish:'FERTIG',
    create_account_text_set_avatar:'SET AVATAR',
    image_chooser_text_camera:'Nehmen Sie ein Foto mit der Kamera',
    image_chooser_text_gallery:'Wählen Sie ein Foto aus der Galerie',
    text_ok:'OK',
    text_cancel:'STORNIEREN',
    no_photo_text_are_you_sure:'Sind Sie sicher, dass Sie nicht wollen, Foto von Ihrem Haustier hinzufügen?',
    no_photo_text_change_anytime_in_options:'Rückkehr jederzeit Bildschirm zu aktualisieren den Avatar zu ändern.',
    hello_blank_fragment:'Hello blank fragment',
    trainings_text_no_trainings:'Sie haben noch keine Schulungen. Hinzufügen neuer oder zu kaufen.',
    trainings_text_title:'TRAINING',
    training_text_training:'AUSBILDUNG',
    training_text_you_will_need:'DU WIRST BRAUCHEN:',
    trainings_text_buy_more_lessons:'Kaufen Neu \ Trainingsstunden',
    dog_profile_text_dog_card:'Hundekarte',
    dog_card_text_breed:'"RASSE: "',
    dog_card_text_owner:'"EIGENTÜMER: "',
    trainings_section_text_trainings_done:'absolvierten Ausbildungen',
    dog_card_text_stats_text:'Statistiken',
    dog_card_text_zdrowie:'GESUNDHEIT',
    dog_card_text_trainings:'TRAINING',
    dog_card_text_basic_data:'Grundinformationen',
    dog_card_text_owner_info:'Anbieter Info',
    dog_card_text_vacc_info:'Impfungn',
    dog_card_text_behavioral_info:'Verhaltens info',
    text_chapters:'SCHRITTE',
    text_days_count:'TAGEN GRAF',
    update_text_save_changes:'ÄNDERUNGEN SPEICHERN',
    update_text_share_social:'Soziales Netzwerk',
    update_text_share_nfc:'Teilen per NFC',
    update_text_show_Qr:'Ihr Hund QR Code',
    dog_friends_text_no_dogs:'Sie haben keine Hunde deiner Freunde hinzugefügt',
    dog_friends_text_title:'Freund des Hundes',
    qr_code_text_title:'QR-CODE SCANNER',
    buy_text_title:'KAUFEN SETS',
    dog_added_text_desc:'Rückkehr jederzeit an Freund des Hundes den Fortschritt zu verfolgen, in Ausbildung eines Hundes ..',
    ar_text_title:'AR MODE',
    nfc_text_title:'Hundekarte Sharing via NFC',
    nfc_text_desc:'Bewegen zweite Telefon NFC Sender erste Handy jetzt und tippen Sie auf den Bildschirm Ihres Hundes Karte zu schicken.',
    nfc_text_title2:'Hund hinzufügen via NFC',
    create_text_title:'ERSTELLEN SET',
    create_text_target:'Ihr Ziel / was wollen Sie Ihren Hund zu lehren',
    create_text_settings:'einstellungen',
    create_training_text_create_button:'ERSTELLEN',
    player_text_start:'ANFANG',
    player_text_finish:'FERTIG',
    weight_text:'gewicht',
    name_text:'name',
    last_name_text:'nachname',
    city_Text:'stadt',
    street_text:'strasse',
    phone_text:'telefone',
    type_desc_text:'beschreibung',
    settings_text_settings_saved:'EINSTELLUNGEN GESPEICHERT',
    settings_text_settings_not_saved:'Fehler! Einstellungen wurde nicht gespeichert!',
    dog_already_added_text:'Hund ist bereits hinzugefügt!',
    dog_not_exist_text:'Hund ist nicht vorhanden',
    title_stopwatch:'STOPPUHR',
    stop_text:'HALT',
    round_text:'RUNDEN',
    start_text:'ANFANG',
    title_notifications:'TAG ZUSAMMENFASSUNG',
    update_text_change_avatar:'ÄNDERUNG AVATAR',
    update_text_title:'UPDATE-DATEN',
    dog_added_text_title:'HINZUGEFÜGT HUND',
    toast_item_bought_in_list:'Ihr Artikel ist in der Kursliste zur Verfügung!',
    toast_item_already_bought:'Artikel bereits gekauft!',
    menu_courses:'Ausbildung',
    menu_dog_info:'Charter Sie Ihren Hund',
    menu_dogs_friends:'Hunde Ihre Freunde',
    menu_stopwatch:'Stoppuhr',
    menu_qrcode:'Scanner QR-CODE',
    menu_ar:'Werkzeug AR',
    menu_update:'Aktualisierung',
    fab_menu_create_new_set:'Erstellen neuer Satz',
    fab_menu_buy_new_set:'Kaufen Sie einen neuen Satz',
    fab_menu_create_auto:'Automatische Anpassung der Satz',
    text_chapter:'"KAPITEL "',
    text_target_course:'TRAINING ZWECK:',
    text_Show_movie:'Show-Film',
    text_increase_speed:'Erhöhen Ausbildung Tempo!',
    text_current_round:'"AKTUELLE RUNDE "',
    text_round:'"Runde "',
    title_your_dog:'DEIN HUND',
    title_shared_card:'SHARED-KARTE',
    text_basic_trainings:'Grundausbildung',
    text_courses_finished:'abgeschlossene Ausbildung Kits',
    text_days_of_trainings:'Anzahl der Tage in der Ausbildung',
    text_registration:'Anmeldung',
    text_age:'Alter',
    text_birth_Date:'Geburtsdatum',
    text_sex:'Sex',
    text_weight:'Gewicht',
    text_sterilization:'Sterilisation',
    text_has_chip:'Es verfügt über einen Chip',
    text_city:'Stadt',
    text_street:'Straße',
    text_house_number:'Haus / Wohnung',
    text_phone:'Telefon',
    text_rabbies_from:'Tollwut',
    text_worms:'Entwurmung',
    text_from:'"zu "',
    text_suggested_training:'vorgeschlagen Ausbildung:\nchodzenie przy nodze',
    text_yes:'ja',
    text_no:'nein',
    add_via_nfx:'Hinzufügen von NFC',
    text_scan_qr_code:'Scannen Sie den QR-Code Hund',
     text_points_earned:'Punkte für die Ausbildung',
    add_to_friends:'Zu Freunden hinzufügen'
	}
        
        
         if ($scope.detectLang == 'pl' || $scope.detectLang == 'pl-PL' || $scope.detectLang == 'pl-pl') {
            $scope.lang = $scope.langpl;
        } else if ($scope.detectLang == 'de' || $scope.detectLang == 'de-DE' || $scope.detectLang == 'de-de') {
            $scope.lang = $scope.langde;
        } else {
            $scope.lang = $scope.langen;
        }

        

        $scope.newUser = {};
        $scope.newUser.wscieklizna = false;
        $scope.newUser.nosowka = false;
        
        $scope.addToFriends =function(id) {
            $.ajax({
                    type: "POST",
                    url: url + '/api/v1/friends/create',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        id: id
                    },
                 headers: {
                    "api-key": currentApiKey
                },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        naviDash.popPage();
                         $("#spinner").fadeOut(1000);
                    },
                    error: function (respond) {
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
        }


        $scope.wsciekliznaCheckbox = function () {
            if ($scope.newUser.wscieklizna == false) {
                $scope.newUser.wscieklizna = true;
                $scope.tmpUser.dog_rabies_vaccination = 1;
            } else {
                $scope.newUser.wscieklizna = false;
                $scope.tmpUser.dog_rabies_vaccination = 0;
            }
        }

        $scope.nosowkaCheckbox = function () {
            if ($scope.newUser.nosowka == false) {
                $scope.newUser.nosowka = true;
                $scope.tmpUser.dog_distemper_vaccination = 1;
            } else {
                $scope.newUser.nosowka = false;
                $scope.tmpUser.dog_distemper_vaccination = 0;
            }
        }

        $scope.wsciekliznaCheckbox2 = function () {
            if ($scope.user.dog.rabies_vaccination == 0) {
                $scope.user.dog.rabies_vaccination = 1;
            } else {
                $scope.user.dog.rabies_vaccination = 0;
            }
        }

        $scope.nosowkaCheckbox2 = function () {
            if ($scope.user.dog.distemper_vaccination == 0) {
                $scope.user.dog.distemper_vaccination = 1;
            } else {
                $scope.user.dog.distemper_vaccination = 0;
            }
        }

        $scope.loguj = function (tekst) {
            window.console && console.log(tekst);
        }

        $scope.updateSelect = function () {
            var masa = $scope.user.dog.weight;
            masa = masa.substring(0, masa.length - 2);
            console.log('masa');
            console.log(masa);
            var element = document.getElementById('preSetWeight');
            element.value = masa;
            var ster = $scope.user.dog.sterilization;
            element = document.getElementById('preSetStery');
            element.value = ster;
            var chip = $scope.user.dog.chip;
            element = document.getElementById('preSetStery');
            element.value = chip;
        }

        //NOTE: Logowanie uzytkownika
        $scope.loginUser = function () {
            var user_email = $("#loginEmail").val();
            var user_password = $("#loginPassword").val();
            if ($.trim(user_email).length > 0 & $.trim(user_password).length > 0) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/security/get-api-key',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        username: user_email,
                        password: user_password
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            currentApiKey = respond.data.api_key;
                            $scope.user = angular.fromJson(respond.data);
                            $scope.user.dog.age = $scope.calcAge($scope.user.dog.birth_date);
                            var tmp = $scope.user.dog.birth_date;
                            tmp = tmp.substring(0, tmp.length - 5);
                            $scope.user.dog.birth = tmp;
                            tmp = $scope.user.created_at;
                            tmp = tmp.substring(0, tmp.length - 5);
                            $scope.user.register = tmp;
                            $.ajax({
                                type: "GET",
                                url: url + '/api/v1/courses/read',
                                beforeSend: function () {
                                    $("#spinner").css('display', 'block');
                                },
                                headers: {
                                    "api-key": currentApiKey
                                },
                                data: {
                                    base: 1
                                },
                                datatype: 'json',
                                cache: false,
                                success: function (respond) {
                                    $("#spinner").fadeOut(1000);
                                    $scope.userCurses = angular.fromJson(respond.data);
                                    navi.pushPage('home.html', {
                                        animation: 'slide'
                                    });
                                },
                                error: function (respond) {
                                    window.console && console.log('error ' + JSON.stringify(respond));
                                    $("#spinner").fadeOut(1000);
                                }
                            });

                        }
                    },
                    error: function (respond) {
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            } else {
                ons.notification.alert({
                    message: 'Podaj e-mail i hasło'
                });
            }
        }

        //NOTE: Reset hasła
        $scope.recoverPassword = function () {
            var user_name = $("#recoverUser").val();
            var user_email = $("#recoverEmail").val();
            if ($.trim(user_email).length > 0 & $.trim(user_name).length > 0) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/registration/password-reset',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        username: user_name,
                        email: user_email
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Twoje hasło zostało wysłane na podany adres e-mail'
                            });
                            navi.popPage();
                        } else if (respond.status == "error") {
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    },
                    error: function (respond) {
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            } else {
                ons.notification.alert({
                    message: 'Podaj e-mail i nazwę uzytkownika'
                });
            }
        }


        $scope.registerUserE1 = function () {
            if ($scope.tmpUser.password != '' && $scope.tmpUser.password == $scope.tmpUser.password2 && $scope.tmpUser.email) {
                navi.pushPage('register2.html', {
                    animation: 'fade'
                });
            }
        }

        $scope.registerUserE2 = function () {
            navi.pushPage('register3.html', {
                animation: 'slide'
            });
        }

        $scope.registerUserE3 = function () {
            navi.pushPage('register4.html', {
                animation: 'slide'
            });
        }

        $scope.registerUserE4 = function () {
            navi.pushPage('register5.html', {
                animation: 'slide'
            });
        }

        $scope.tmpUser = {
            email: '',
            password: '',
            password2: '',
            first_name: '',
            last_name: '',
            city: '',
            address: '',
            flat_number: '',
            phone_number: '',
            dog_name: '',
            dog_breed: '',
            dog_sex: 'suka',
            dog_weight: '1kg',
            dog_birth_date: '',
            dog_sterilization: 'nie',
            dog_chip: 'tak',
            dog_rabies_vaccination: 0,
            dog_rabies_vaccination_at: '',
            dog_distemper_vaccination: 0,
            dog_distemper_vaccination_at: '',
            dog_description: ''
        }


        //NOTE: Rejestracja uzytkownika
        $scope.registerUser = function () {
            var ster = 0;
            if ($scope.tmpUser.dog_sterilization = "tak") {
                ster = 1;
            }
            var chip = 0;
            if ($scope.tmpUser.chip = "tak") {
                chip = 1;
            }
            $.ajax({
                type: "POST",
                url: url + '/api/v1/registration/register',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    email: $scope.tmpUser.email,
                    password: $scope.tmpUser.password,
                    first_name: $scope.tmpUser.first_name,
                    last_name: $scope.tmpUser.last_name,
                    city: $scope.tmpUser.city,
                    address: $scope.tmpUser.address,
                    flat_number: $scope.tmpUser.flat_number,
                    phone_number: $scope.tmpUser.phone_number,
                    dog_name: $scope.tmpUser.dog_name,
                    dog_breed: $scope.tmpUser.dog_breed,
                    dog_sex: $scope.tmpUser.dog_sex,
                    dog_weight: $scope.tmpUser.dog_weight,
                    dog_birth_date: $scope.tmpUser.dog_birth_date,
                    dog_sterilization: ster,
                    dog_chip: chip,
                    dog_rabies_vaccination: $scope.tmpUser.dog_rabies_vaccination,
                    dog_rabies_vaccination_at: $scope.tmpUser.dog_rabies_vaccination_at,
                    dog_distemper_vaccination: $scope.tmpUser.dog_distemper_vaccination,
                    dog_distemper_vaccination_at: $scope.tmpUser.dog_distemper_vaccination_at,
                    dog_description: $scope.tmpUser.dog_description
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "exists") {
                        ons.notification.alert({
                            message: 'Hey! Już masz konto! możesz się zalogować'
                        });
                        $("#spinner").fadeOut(1000);
                        navi.popPage();
                    } else if (respond.status == "success") {
                        currentApiKey = respond.data.api_key;
                        $scope.user = angular.fromJson(respond.data);
                        $scope.user.dog.age = $scope.calcAge($scope.user.dog.birth_date);
                        var tmp = $scope.user.dog.birth_date;
                        tmp = tmp.substring(0, tmp.length - 5);
                        $scope.user.dog.birth = tmp;
                        tmp = $scope.user.created_at;
                        tmp = tmp.substring(0, tmp.length - 5);
                        $scope.user.register = tmp;
                        $.ajax({
                            type: "GET",
                            url: url + '/api/v1/courses/read',
                            beforeSend: function () {
                                $("#spinner").css('display', 'block');
                            },
                            headers: {
                                "api-key": currentApiKey
                            },
                            data: {
                                base: 1
                            },
                            datatype: 'json',
                            cache: false,
                            success: function (respond) {
                                $("#spinner").fadeOut(1000);
                                $scope.userCurses = angular.fromJson(respond.data);
                                navi.pushPage('home.html', {
                                    animation: 'slide'
                                });
                            },
                            error: function (respond) {
                                window.console && console.log('error ' + JSON.stringify(respond));
                                $("#spinner").fadeOut(1000);
                            }
                        });

                    }
                }
            });

        }

        //NOTE: Wylogowywanie
        $scope.logOut = function () {
            $.ajax({
                type: "POST",
                url: url + '/api/v1/security/logout',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    $("#spinner").fadeOut(1000);
                    menu.closeMenu();
                    navi.popPage();
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                }
            });
        }


        //NOTE: Otwieranie ekranu ustawień
        $scope.openFriendsDogs = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'friends') {
                $scope.currentPage = 'friends';

                $.ajax({
                    type: "GET",
                    url: url + '/api/v1/friends/read',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        only_unread: 1
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Pobrano listę znajomych');
                            $scope.friends = angular.fromJson(respond.data);
                            angular.forEach($scope.friends, function (friendc, index) {
                                friendc.friend.dog.age = $scope.calcAge(friendc.friend.dog.birth_date);
                                var tmp = friendc.friend.dog.birth_date;
                                tmp = tmp.substring(0, tmp.length - 5);
                                friendc.friend.dog.birth = tmp;
                                tmp = friendc.friend.created_at;
                                tmp = tmp.substring(0, tmp.length - 5);
                                friendc.friend.register = tmp;
                            });
                            naviDash.replacePage('friends.html');
                            $("#spinner").fadeOut(1000);

                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Błąd pobierania danych'
                            });
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });

            }
        }
        
        //NOTE: Otwieranie ekranu dodawania psów
        $scope.addFriends = function () {
            menu.closeMenu();
       
                $scope.currentPage = 'friendsta';

                $.ajax({
                    type: "GET",
                    url: url + '/api/v1/friends/search',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        only_unread: 1
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Pobrano listę znajomych');
                            $scope.friendsta = angular.fromJson(respond.data);
                            angular.forEach($scope.friends, function (friendc, index) {
                                friendc.friend.dog.age = $scope.calcAge(friendc.friend.dog.birth_date);
                                var tmp = friendc.friend.dog.birth_date;
                                tmp = tmp.substring(0, tmp.length - 5);
                                friendc.friend.dog.birth = tmp;
                                tmp = friendc.friend.created_at;
                                tmp = tmp.substring(0, tmp.length - 5);
                                friendc.friend.register = tmp;
                            });
                            naviDash.pushPage('addfriends.html');
                            $("#spinner").fadeOut(1000);

                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Błąd pobierania danych'
                            });
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });

           
        }

        //NOTE: karta psa
        $scope.dogDetails = function (id) {
            menu.closeMenu();

            $scope.currentPage = 'friendsdog';

            $.ajax({
                type: "GET",
                url: url + '/api/v1/friends/read/' + id,
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {},
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Pobrano listę znajomych');
                        $scope.dogInfo = angular.fromJson(respond.data);
                        $scope.cardView = 'szkolenie';
                        $scope.dogInfo.dog.age = $scope.calcAge($scope.dogInfo.dog.birth_date);
                        var tmp = $scope.dogInfo.dog.birth_date;
                        tmp = tmp.substring(0, tmp.length - 5);
                        $scope.dogInfo.dog.birth = tmp;
                        tmp = $scope.dogInfo.created_at;
                        tmp = tmp.substring(0, tmp.length - 5);
                        $scope.dogInfo.register = tmp;

                        naviDash.pushPage('frienddog.html');
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Błąd pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: karta psa
        $scope.curseDetails = function (id) {
            menu.closeMenu();

            $scope.currentPage = 'cursedetails';

            $.ajax({
                type: "GET",
                url: url + '/api/v1/courses/read/' + id,
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {},
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Pobrano szczegoly zestawu');
                        $scope.curseInfo = angular.fromJson(respond.data);
                        angular.forEach($scope.curseInfo.phases, function (faza, index) {
                            var done = 0;
                            angular.forEach(faza.days, function (dzien, index) {
                                if (dzien == 1) {
                                    done++;
                                }
                            });
                            faza.done = done;
                        });
                        naviDash.pushPage('cursedetails.html');
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Błąd pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        $scope.showDays = function (id) {
            $scope.etap = id;
            naviDash.pushPage('cursedetailsphase.html');
        }

        $scope.showMovie = function (id) {
            $scope.etap = id;
            naviDash.pushPage('cursedetailsmovie.html');
            $scope.windowW = $(window).innerWidth();
            $('#really-cool-video').css('height', $scope.windowW);
        }

        $scope.openSettings = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Settings') {
                $scope.currentPage = 'Settings';
                naviDash.replacePage('settings.html');
            }
        }

        $scope.setDay = function (faza, dzien, wartosc) {
            $.ajax({
                type: "POST",
                url: url + '/api/v1/user/course/set-day',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    phaseId: faza,
                    day: dzien,
                    done: wartosc
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Zaktualizowano dzien');
                        $("#spinner").fadeOut(1000);
                        window.console && console.log($scope.curseInfo.phases[$scope.etap].days[dzien]);
                        window.console && console.log(dzien);
                        $scope.curseInfo.phases[$scope.etap].days[dzien] = wartosc;
                        $scope.$apply();
                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        $scope.openYourDog = function () {
            menu.closeMenu();
            $scope.cardView = "szkolenie";
            if ($scope.currentPage != 'YourDog') {
                $scope.currentPage = 'YourDog';
                naviDash.replacePage('yourdog.html');
            }
        }

        $scope.openStoper = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'stoper') {
                $scope.currentPage = 'stoper'
                naviDash.replacePage('stoper.html');
                clearInterval(timeinterval);
                $scope.stoper = {
                    action: 'stop',
                    min: 0,
                    sec: 0,
                    tys: 0,
                    rmin: 0,
                    rsec: 0,
                    rtys: 0,
                    rundy: 0,
                    rounds: []
                }
            }
        }
        var timeinterval = 0;
        $scope.startStoper = function () {
            $scope.stoper.action = 'start';
            var iFrequency = 10;

            timeinterval = setInterval(function () {
                $scope.stoper.tys++;
                if ($scope.stoper.tys == 100) {
                    $scope.stoper.tys = 0;
                    $scope.stoper.sec++;
                    if ($scope.stoper.sec == 60) {
                        $scope.stoper.sec = 0;
                        $scope.stoper.min++;
                    }
                }
                $scope.stoper.rtys++;
                if ($scope.stoper.rtys == 100) {
                    $scope.stoper.rtys = 0;
                    $scope.stoper.rsec++;
                    if ($scope.stoper.rsec == 60) {
                        $scope.stoper.rsec = 0;
                        $scope.stoper.rmin++;
                    }
                }
                $scope.$apply();
            }, 10);
        }

        $scope.stopStoper = function () {
            clearInterval(timeinterval);
            $scope.stoper.action = 'stop';
        }

        $scope.resetStoper = function () {
            clearInterval(timeinterval);
            $scope.stoper = {
                action: 'stop',
                min: 0,
                sec: 0,
                tys: 0,
                rmin: 0,
                rsec: 0,
                rtys: 0,
                rundy: 0,
                rounds: []
            }
        }

        $scope.rundaStoper = function () {
            $scope.stoper.rundy++;
            var minpref = "";
            if ($scope.stoper.rmin < 0) {
                minpref = "0";
            }
            var secpref = "";
            if ($scope.stoper.rsec < 0) {
                secpref = "0";
            }
            var tyspref = "";
            if ($scope.stoper.rtys < 0) {
                tyspref = "0";
            }
            var newRound = {
                id: $scope.stoper.rundy,
                czas: minpref + $scope.stoper.rmin + ":" + secpref + $scope.stoper.rsec + "," + tyspref + $scope.stoper.rtys
            }
            $scope.stoper.rmin = 0;
            $scope.stoper.rsec = 0;
            $scope.stoper.rtys = 0;
            $scope.stoper.rounds.push(newRound);
        }



        $scope.calcAge = function (dateString) {
            dateString = dateString.substring(0, dateString.length - 5);
            var birthday = +new Date(dateString);
            return ~~((Date.now() - birthday) / (31557600000));
        }

        $scope.cardViewChange = function (na) {
            $scope.cardView = na;
        }



        //NOTE: Zmiana avatara
        $scope.changeAvatar = function () {
            function convertToDataURLviaCanvas(url, callback, outputFormat) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function () {
                    var canvas = document.createElement('CANVAS');
                    var ctx = canvas.getContext('2d');
                    var dataURL;
                    canvas.height = this.height * 0.1;
                    canvas.width = this.width * 0.1;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.translate(-canvas.width / 2, -canvas.height / 2);
                    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                    dataURL = canvas.toDataURL(outputFormat);
                    callback(dataURL);
                    canvas = null;
                };
                img.src = url;
            }

            function getLengthInBytes(str) {
                var b = str.match(/[^\x00-\xff]/g);
                return (str.length + (!b ? 0 : b.length));
            }

            function captureSuccess(mediaFiles) {
                var i, len;
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                    var avatrUzytkownika = mediaFiles[i].fullPath;
                    convertToDataURLviaCanvas(avatrUzytkownika, function (base64Img) {
                        avatrUzytkownika = base64Img;
                        window.console && console.log('Nowy awatar pobrany');
                        $('#avatarPreview').css('background-image', 'url(' + base64Img + ')');
                        $scope.user.new_avatar = base64Img.split(',')[1];
                        $scope.user.new_avatar_size = getLengthInBytes($scope.user.new_avatar);
                        window.console && console.log($scope.user.new_avatar_size);
                    });
                }
            }

            navigator.device.capture.captureImage(captureSuccess, console.log("capture"), {
                limit: 1
            });
        }


        //NOTE: Zapisywanie zmian w profilu użytkownika
        $scope.saveSettings = function () {
            var passwordOK = false;
            var sendData = false;

            if ($scope.user.new_avatar) {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    city: $scope.user.city,
                    address: $scope.user.address,
                    flat_number: $scope.user.flat_number,
                    phone_number: $scope.user.phone_number,
                    dog_weight: $('#preSetWeight').val() + 'kg',
                    dog_sterilization: $('#preSetStery').val(),
                    dog_chip: $('#preSetChip').val(),
                    dog_rabies_vaccination: $scope.user.dog.rabies_vaccination,
                    dog_rabies_vaccination_at: $scope.user.dog.rabies_vaccination_at,
                    dog_distemper_vaccination: $scope.user.dog.distemper_vaccination,
                    dog_distemper_vaccination_at: $scope.user.dog.distemper_vaccination_at,
                    dog_description: $scope.user.dog.description,
                    dog_image: JSON.stringify({
                        'sizeInBytes': $scope.user.new_avatar_size,
                        'mimeType': 'image/png',
                        'name': 'avatar',
                        'data': $scope.user.new_avatar
                    })
                }
            } else {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    city: $scope.user.city,
                    address: $scope.user.address,
                    flat_number: $scope.user.flat_number,
                    phone_number: $scope.user.phone_number,
                    dog_weight: $('#preSetWeight').val() + 'kg',
                    dog_sterilization: $('#preSetStery').val(),
                    dog_chip: $('#preSetChip').val(),
                    dog_rabies_vaccination: $scope.user.dog.rabies_vaccination,
                    dog_rabies_vaccination_at: $scope.user.dog.rabies_vaccination_at,
                    dog_distemper_vaccination: $scope.user.dog.distemper_vaccination,
                    dog_distemper_vaccination_at: $scope.user.dog.distemper_vaccination_at,
                    dog_description: $scope.user.dog.description
                }
            }

            if (sendData) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/update-profile',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: dataToSend,
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Zaktualizowano dane użytkownika');
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Twoje dane zostały zaktualizowane'
                            });
                            $scope.user.dog.dog_weight = $('#preSetWeight').val() + 'kg';
                            $scope.user.dog.dog_sterilization = $('#preSetStery').val();
                            $scope.user.dog.dog_chip = $('#preSetChip').val();
                            $scope.$apply();
                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            }
        }


        //NOTE: Aktualizacja lokalizacji
        $scope.updateLocation = function () {
            var onSuccess = function (position) {
                var currentLocationLat = position.coords.latitude;
                var currentLocationLong = position.coords.longitude;

                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/update-location',
                    beforeSend: function () {},
                    data: {
                        latitude: currentLocationLat,
                        longitude: currentLocationLong
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Zaktualizowano lokalizacje');
                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                    }
                });
            };

            var options = {};

            navigator.geolocation.getCurrentPosition(onSuccess, null, options);
        }

        //NOTE: Otwieranie ekranu głównego
        $scope.openHome = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Home') {
                $scope.currentPage = 'Home';
                naviDash.replacePage('homedash.html');
            }
        }


        //NOTE: Otwieranie ekranu statystyk
        $scope.openStats = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Stats') {
                $scope.currentPage = 'Stats';
                naviDash.replacePage('stats.html');
            }
        }



    });

    module.controller('MasterController', function ($scope, $projekty, $filter) {
        $scope.items = $projekty.items;
        var userID = $scope.user.idUser;
    });


    module.factory('$projekty', function () {
        var projekty = {};
        //NOTE: Lista projekty
        projekty.items = [];
        return projekty;
    });


})();