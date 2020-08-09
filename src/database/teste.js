const db = require('./db.js')
const createProffy = require('./createProffy')

db.then(async (db) => {
    //Inserir Dados
    proffyValue = { 
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }

    classValue = {
        subject: 4,
        cost: "20"
    }

    classScheduleValues = [
            {
                weekday:1,
                time_from:720,
                time_to:1220

        },
            {
                weekday:0,
                time_from:520,
                time_to:1220
                
        }
    ]
    // await createProffy(db, {proffyValue,classValue,classScheduleValues})
    // Consultar proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar classes de um professor e os dados do professor
    const selectedClassesandProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesandProffys)

    //
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedules.*
        FROM class_schedules
        WHERE class_schedules.class_id = 1
        and class_schedules.weekeday = 0
        and class_schedules.time_from <= 420;
    `)
    console.log(selectedClassesSchedules)

})