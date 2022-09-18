const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Маргарита",
            "id_3": "Мария",
            "id_4": "Светлана",
            "id_5": "Галина",
            "id_6": "Наталья",
            "id_7": "Татьяна",
            "id_8": "Надежда",
            "id_9": "Кристина",
            "id_10": "Регина"
        }
    }`,
    patronamicNameMaleJson: ` {
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Иванович",
            "id_3": "Михайлович",
            "id_4": "Алексеевич",
            "id_5": "Николаевич",
            "id_6": "Максимович",
            "id_7": "Егорович",
            "id_8": "Артемович",
            "id_9": "Дмитриевич",
            "id_10": "Геннадьевич"
        }


    }`,

    patronamicNameFemaleJson: ` {
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Ивановна",
            "id_3": "Михайловна",
            "id_4": "Алексеевна",
            "id_5": "Николаевна",
            "id_6": "Максимовна",
            "id_7": "Егоровна",
            "id_8": "Артемовна",
            "id_9": "Дмитриевна",
            "id_10": "Геннадьевна"
        }

    }`,


    workFemaleJson: ` {
        "count": 10,
        "list": {     
            "id_1": "учительница",
            "id_2": "докторка",
            "id_3": "программистка",
            "id_4": "художница",
            "id_5": "фармацевтка",
            "id_6": "заведующая",
            "id_7": "стюардесса",
            "id_8": "певица",
            "id_9": "актриса",
            "id_10": "режесерка"
        }

    }`,

    workMaleJson: ` {
        "count": 10,
        "list": {     
            "id_1": "учитель",
            "id_2": "доктор",
            "id_3": "программист",
            "id_4": "художник",
            "id_5": "фармацевт",
            "id_6": "пожарный",
            "id_7": "стюард",
            "id_8": "режесер",
            "id_9": "шахтер",
            "id_10": "дворник"
        }

    }`,





    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),



    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count)}`;  // this = personGenerator
        console.log(this.randomIntNumber(1, 0));
        return obj.list[prop];
    },


    randomGender: function () {
        if (this.randomIntNumber() == 1) {
            return this.GENDER_FEMALE;
        } else {
            return this.GENDER_MALE;
        }
    },

    randomFirstName: function () {

        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }

    },



    randomSurname: function () {
        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.surnameJson) + 'a';
        } else {
            return this.randomValue(this.surnameJson);
        }


    },

    randomPatranomicName: function () {
        if (this.person.gender === 'Женщина') {
            return this.randomValue(this.patronamicNameFemaleJson);
        } else {
            return this.randomValue(this.patronamicNameMaleJson);
        }


    },

    randomWork: function () {
        if (this.person.gender === 'Женщина') {
            return this.randomValue(this. workFemaleJson);
        } else {
            return this.randomValue(this. workMaleJson);
        }




    },

    randomDate: function () {
        let month = this.randomIntNumber(1, 12);
        switch (month) {
            case 1:
                month = 'Января';
                break;
            case 2:
                month = 'Февраля';
                break;
            case 3:
                month = 'Марта';
                break;
            case 4:
                month = 'Апреля';
                break;
            case 5:
                month = 'Мая';
                break;
            case 6:
                month = 'Июня';
                break;
            case 7:
                month = 'Июля';
                break;
            case 8:
                month = 'Августа';
                break;
            case 9:
                month = 'Сентября';
                break;
            case 10:
                month = 'Октября';
                break;
            case 11:
                month = 'Ноября';
                break;
            case 12:
                month = 'Декабря';
                break;
        }
        let day = this.randomIntNumber(1, 31);
        switch (month) {
            case 2: day = this.randomIntNumber (1,28);
            break;
            case 4 || 6 || 9 || 11: day = this.randomIntNumber (1,30);
            break;
            case 1 || 3 || 5 || 7 || 8 || 12: day = this.randomIntNumber (1,30);
            break;
        }

        let year = this.randomIntNumber(1980,2015);

        return day + ' ' + month + ' ' + year + ' года';
    },




    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patranomic = this.randomPatranomicName();
        this.person.work = this.randomWork();
        this.person.date = this.randomDate();
        return this.person;
    }
};
