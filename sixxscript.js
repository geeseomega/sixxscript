// ==UserScript==
// @name         iiRcade Install Unlisted Apps
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Metal Slug?
// @author       Mystery Encoder
// @match        https://store.iircade.com/mygames/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';



    // Wait for the window to finish loading
    window.onload = function() {
        class ApiService {
            constructor() {
                this.DomainName = 'https://api.iircade.com';
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }

            getAuthorizationHeader() {
                return 'bearer ' + this.currentUser.access_token;
            }

            downloadGameToDevice(gameId, D890CE508F) {
                const url = '/api/game/downloadtodevice';
                const headers = {
                    'Authorization': this.getAuthorizationHeader()
                };
                const data = {
                    GameId: gameId,
                    Devices: D890CE508F,
                    PurchaseId: 100000 // Assuming PurchaseId remains constant
                };

                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: this.DomainName + url,
                        method: 'POST',
                        headers: headers,
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: function(response) {
                            resolve(response);
                        },
                        error: function(error) {
                            reject(error);
                        }
                    });
                });
            }
            
  addCirqueInterstellarButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Cirque Interstellar to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            //alert('Button clicked for Device ID: ' + D890CE508F);
            this.downloadGameToDevice(365,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }
     addMetalSlugButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Metal Slug to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            //alert('Button clicked for Device ID: ' + D890CE508F);
            this.downloadGameToDevice(253,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

      addDoubleDragonButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Double Dragon 1 to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(3,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     addDoubleDragon2Button(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Double Dragon 2 to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(110,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     addDoubleDragon3Button(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Double Dragon 3 to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(155,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     addEternumExButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Eternum Ex to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(364,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     addFleaButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Flea to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(374,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     AddMountainKingButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Mountain King to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(126,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }
     addTapeWormDiscoPuzzleButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Tapeworm Disco Puzzle to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(375,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }
     addTankBashButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Tank Bash to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(284,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

     addRollOverTureButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install Rolloverture to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(199,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }

      addPumpItUpButton(D890CE508F, deviceName) {
        const button = document.createElement('ion-button');
        button.innerHTML = "Install PumpIt Up to "+deviceName;

        // Add custom CSS styles
        button.style.setProperty('display', 'inline-block', 'important');
        button.style.setProperty('visibility', 'visible', 'important');

        // Add an event listener to the button
        button.addEventListener('click', () => {
            this.downloadGameToDevice(359,D890CE508F);
        });

        // Find the app-mygames element
        const appMygames = document.querySelector('app-mygames');

        // Append the button to the app-mygames element
        appMygames.appendChild(button);
    }


            getUserDevices() {
                const url = '/api/userdevice';
                const headers = {
                    'Authorization': this.getAuthorizationHeader()
                };

                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: this.DomainName + url,
                        method: 'GET',
                        headers: headers,
                        success: function(response) {
                            resolve(response);
                        },
                        error: function(error) {
                            reject(error);
                        }
                    });
                });
            }
        }

    // Instantiate ApiService
    const apiService = new ApiService();
        // Get user devices and add buttons for each device
        apiService.getUserDevices()
            .then(devices => {
                devices.forEach(device => {
                    //alert(device.Name);
                    apiService.addMetalSlugButton(device.Id, device.Name);
                    apiService.addDoubleDragonButton(device.Id, device.Name);
                    apiService.addDoubleDragon2Button(device.Id, device.Name);
                    apiService.addDoubleDragon3Button(device.Id, device.Name);
                    apiService.addEternumExButton(device.Id, device.Name);
                    apiService.addFleaButton(device.Id, device.Name);
                    apiService.AddMountainKingButton(device.Id, device.Name);
                    apiService.addTapeWormDiscoPuzzleButton(device.Id, device.Name);
                    apiService.addRollOverTureButton(device.Id, device.Name);
                    apiService.addPumpItUpButton(device.Id, device.Name);
                    apiService.addCirqueInterstellarButton(device.Id, device.Name);
                    apiService.addTankBashButton(device.Id, device.Name);
                });
            })
            .catch(error => {
                console.error('Error fetching user devices:', error);
            });
    };
})();
