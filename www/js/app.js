(function () {
    'use strict';
    var module = angular.module('app', ['onsen']);
    var url = "http://doghomework.dev.thickmug.com";
    var currentApiKey;
    var timeinterval = 0;


    module.controller('AppController', function ($scope, $projekty, $filter) {
        $scope.currentPage = "Home";
        $scope.date = new Date();




        $scope.newUser = {};
        $scope.newUser.wscieklizna = false;
        $scope.newUser.nosowka = false;


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