
var ctx = document.getElementById("myChart").getContext('2d');
console.log("outputting ctx: " + ctx); 

//var myChart = new Chart(ctx, chartData);
 var myChart = new Chart(ctx,{
        type: 'horizontalBar',
        data: {
            labels: [
                        "Despicable Me 3"
                        ,"Beauty and the Beast"
                        ,"Dawn of the Planet of the Apes"
                        ,"Spider-Man: Homecoming"
                        ,"War for the Planet of the Apes"
                        ,"Rise of the Planet of the Apes"
                        ,"Logan"
                        ,"Ghost in the Shell"
                        ,"Guardians of the Galaxy"
                        ,"Life"
                        ,"Wonder Woman"
                        ,"The Mummy"
                        ,"Jurassic World"
                        ,"John Wick"
                        ,"Kong: Skull Island"
                        ,"Mad Max: Fury Road"
                        ,"Pirates of the Caribbean: The Curse of the Black Pearl"
                        ,"Pirates of the Caribbean: Dead Men Tell No Tales"
                        ,"The Fate of the Furious"
                        ,"Transformers: The Last Knight"
                    ],
            datasets: [{
                label: '# of Votes',
                data: [
                        543
                        ,3950
                        ,3717
                        ,1029
                        ,246
                        ,3666
                        ,4755
                        ,1501
                        ,8510
                        ,1295
                        ,2965
                        ,1169
                        ,7821
                        ,4714
                        ,2286
                        ,8564
                        ,6160
                        ,1681
                        ,2946
                        ,721
                    ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Top 20 Popular Movies'
                },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });