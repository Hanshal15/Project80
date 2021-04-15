function showpara1() {
    var inputs=[

    ];

    for(i=1; i<=6 ; i++) {
        inputs.push(document.getElementById("para1-input-" + i).value);
    }
    inputs.join(". ");
    document.getElementById("textarea1").innerHTML=inputs.join(". ");
}

function showpara2() {
    var inputs=[

    ];

    for(i=1; i<=6 ; i++) {
        inputs.push(document.getElementById("para2-input-" + i).value);
    }
    inputs.join(". ");
    document.getElementById("textarea2").innerHTML=inputs.join(". ");
}
