const app = new Vue(
    {
        el: '#root',
        data: {
            timeout: null,
            newMessage: '',
            newSearch: '',
            currentChat: 0,
            activePushNotifications: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            menuIconVisible: false,
                            menuVisible: false,
                            showInfo: false
                        }
                    ],
                }
            ]
        },
        computed: {
            
            /**     arrayOfMessageTimes
            * Description: generate an array of arrays; the elements of the main-array are arrays containing the times of each message present in contacts; the length of the main-array is always equal to the length of the array of objects present in the contacts and the length of each array in main-array is the same of each contact messages' array; this allows us to use the first index to call elements referring to the contacts' array and to use the second index to call elements referring to a specific contact's messages' array. For example: arrayOfMessageTimes[firstIndex][secondIndex] call a specific message passing by main-array with firstIndex (0 <= firstIndex < contacts.lenght) and by a specific messageTimes' array with secondIndex (0 <= secondIndex < contacts[firstIndex].messages.length).
            * @returns {Array of Arrays} Returns an array of arrays like the one below:
            * 
            *                    messageTimes of first contact       messageTimes of second contact    ...
            * timesArray = [ [messageTime,messageTime,messageTime],  [messageTime,messageTime],        ... ] 
            * 
            */
            arrayOfMessageTimes: function() {
                const timesArray = [];
                this.contacts.forEach(element => {
                    const theseTimes = [];
                    const theseMessages = element.messages;
                    theseMessages.forEach(item => {
                        const messageTime = item.date.split(' ')[1].slice(0,5);
                        theseTimes.push(messageTime);
                    })
                    timesArray.push(theseTimes);
                });
                console.log(timesArray);
                return timesArray
            },
            theseClasses: function() {
                const generalArray = [];
                this.contacts.forEach((element, index) => {
                    const nestedArray = [];
                    if (index == this.currentChat) {
                        nestedArray.push('active');
                    }

                    if (!element.visible) {
                        nestedArray.push('d-none');
                    }

                    generalArray.push(nestedArray);
                })
                return generalArray
            }
        },
        methods: {
            sendNewMessage: function(i) {
                clearInterval(this.timeout);
                if (this.newMessage.trim() !== '') {
                    const newMex = {
                        date: this.currentDate(),
                        message: this.newMessage,
                        status: 'sent',
                        menuIconVisible: false,
                        menuVisible: false,
                        showInfo: false
                    }
                    this.contacts[i].messages.push(newMex);
                }
                this.newMessage = '';
                this.timeout = setTimeout(this.answerGenerator, 1000)
            },
            answerGenerator: function() {
                const newAnswer = {
                    date: this.currentDate(),
                    message: 'ok',
                    status: 'received',
                    menuIconVisible: false,
                    menuVisible: false,
                    showInfo: false
                }
                this.contacts[this.currentChat].messages.push(newAnswer);
                clearInterval(this.timeout);
            },
            filterContacts: function() {
                if (this.newSearch.trim() !== '') {
                    this.contacts.forEach(element => {
                        const newSearchToCheck = this.newSearch.trim().toLowerCase();
                        if (element.name.toLowerCase().includes(newSearchToCheck)) {
                            element.visible = true;
                        } else {
                            element.visible = false;
                        }
                    })
                } else {
                    this.contacts.forEach(element => {
                        element.visible = true;
                    })
                }
            },
            hideThis: function(index) {
                this.contacts[this.currentChat].messages[index].menuIconVisible = false;
                this.contacts[this.currentChat].messages[index].menuVisible = false;
            },
            deleteMessage: function(index) {
                this.contacts[this.currentChat].messages.splice(index, 1);
            },
            getLastElementOf: function(thisArray) {
                return thisArray[thisArray.length - 1]
            },
            getCurrentElementOf: function(thisArray,thisIndex) {
                return thisArray[this.currentChat][thisIndex]
            },
            getLastMessageOf: function(thisContact) {
                return thisContact.messages[thisContact.messages.length - 1].message
            },
            notificationsToggle: function() {
                this.activePushNotifications = !this.activePushNotifications;
            },
            currentDate: function() {
                const date = new Date();
                console.log(date);
                let month = date.getMonth().toString();
                if (month.length < 2) {
                    month = '0';
                    month += (date.getMonth() + 1).toString();
                } else {
                    month = (date.getMonth() + 1).toString();
                }
                let day = date.getDate().toString();
                if (day.length < 2) {
                    day = '0';
                    day += date.getDate().toString();
                }
                const year = date.getFullYear();
                const hours = date.toString().split(' ')[4].slice(0,8);
                const reducedDate = day+'/'+month+'/'+year+' '+ hours;
                return reducedDate;
            },
            getExtendedDateDownToMinutes: function(thisDate) {
                return thisDate.slice(0,16);
            },
            showInfoToggle: function(thisMessage) {
                thisMessage.showInfo = !thisMessage.showInfo;
                thisMessage.menuVisible = false;
            }
        }
    }
)