var wifi_list = {
    Data: [
        {
            wiFiName: "asdfasdfasdfasfd"
        },
        {
            wiFiName: "23123aaaaaaaaa"
        },
        {
            wiFiName: "smart Farm1"
        },
        {
            wiFiName: "Smart Local"
        }
    ],
    Error: 0,
    Message: null
}

var req_wifi = {
    cnt: 2,
    wifi: [
        {

            rssi: -40,
            ssid: "smarttttt farmmm1",
            ch: 4,
            auth: 4
        },
        {

            rssi: -80,
            ssid: "23123aaaaaaaaa",
            ch: 4,
            auth: 4

        },
        {

            rssi: -50,
            ssid: "good smart farm",
            ch: 4,
            auth: 4

        },
        {

            rssi: -20,
            ssid: "smart 2",
            ch: 4,
            auth: 4

        }
    ]
}

function retrieveWifi() {
    console.log("request for wifi------");
    if (req_wifi.cnt != 0) {
        // DisplayWifiList();
        showWifi();
        wifi_option.style.display = 'block';
        console.log("wifiList", wifi_list.Data);

    }
}

function showWifi() {

    // for (let n = 0; n < wifi_list.Data.length; n++) {
    //     // DisplayWifiList(n, wifi_list.Data[n].wiFiName);
    //     DisplayWifiList_2(n, wifi_list.Data[n].wiFiName);

    // }


    for (let n = 0; n < req_wifi.wifi.length; n++) {
        // DisplayWifiList(n, wifi_list.Data[n].wiFiName);
        DisplayWifiList_2(n, req_wifi.wifi[n].ssid, req_wifi.wifi[n].rssi);

    }


}

function DisplayWifiList_2(progIndex, name_wifi, wifi_strt) {



    //---- column wi-fi name
    let div_wifi = document.createElement("p");
    // div_wifi.setAttribute("p");
    div_wifi.innerHTML = name_wifi;

    let div_col_wifi = document.createElement("div");
    div_col_wifi.setAttribute("id", "column1_edit" + progIndex);
    div_col_wifi.setAttribute("class", "col-sm-6 col-s-6 col-6 left padding-top-3");
    div_col_wifi.setAttribute("onclick", "applyWiFi(" + progIndex + ")");
    div_col_wifi.appendChild(div_wifi);


    //------------ wave strength icon

    let wifi_icon = document.createElement("div");

    if (wifi_strt < -70) {
        wifi_icon.setAttribute("class", "waveStrength-2");
    }
    else if (wifi_strt > -60 && wifi_strt <= -50) {
        wifi_icon.setAttribute("class", "waveStrength-3");
    }
    else if (wifi_strt < -30 && wifi_strt > -60) {
        wifi_icon.setAttribute("class", "waveStrength-4");
    }

    let wv1_wave = document.createElement("div");
    wv1_wave.setAttribute("class", "wv1 wave");


    let wv2_wave = document.createElement("div");
    wv2_wave.setAttribute("class", "wv2 wave");
    wv2_wave.appendChild(wv1_wave);

    let wv3_wave = document.createElement("div");
    wv3_wave.setAttribute("class", "wv3 wave");
    wv3_wave.appendChild(wv2_wave);

    let wv4_wave = document.createElement("div");
    wv4_wave.setAttribute("class", "wv4 wave");
    wv4_wave.appendChild(wv3_wave);
    wifi_icon.appendChild(wv4_wave);

    let div_col_wave = document.createElement("div");
    div_col_wave.setAttribute("id", "column2_edit" + progIndex);
    div_col_wave.setAttribute("class", "col-sm-1 col-s-1 col-1 right padding-wave");
    div_col_wave.appendChild(wifi_icon);



    //----- column lock symbol
    let div_lock = document.createElement("div");
    div_lock.setAttribute("class", "lock");

    let div_col_lock = document.createElement("div");
    div_col_lock.setAttribute("id", "column2_edit" + progIndex);
    div_col_lock.setAttribute("class", "col-sm-2 col-s-2 col-2 right padding-lock");
    div_col_lock.appendChild(div_lock);

    let div_row = document.createElement("div");
    div_row.setAttribute("class", "row");
    div_row.appendChild(div_col_wifi);
    div_row.appendChild(div_col_wave);
    div_row.appendChild(div_col_lock);

    let div_box = document.createElement("div");
    div_box.setAttribute("id", "child_" + progIndex);
    div_box.setAttribute("class", "boxboard");
    div_box.appendChild(div_row);

    let id = "time_" + progIndex;
    let box = document.getElementById(id);
    box.appendChild(div_box);

    let ggg = document.getElementsByClassName("wv1 wave");
    for (i = 0; i < ggg.length; i++) {
        ggg[i].style.borderTopColor = "white";
    }
}

function DisplayWifiList(progIndex, name_wifi) {

    console.log("display list", progIndex, name_wifi);


    //---------------column0--------------------
    //delete button
    let div_del = document.createElement("div");
    // div_del.setAttribute("id", "button" + progIndex);
    // div_del.setAttribute("class", "button_edit")
    // div_del.innerHTML = "&#8211;"
    // div_del.setAttribute("onclick", "DeleteTimer(" + progIndex + ")");
    //delete column
    let div_col_del = document.createElement("div");
    div_col_del.setAttribute("id", "column0_edit" + progIndex);
    div_col_del.appendChild(div_del);

    //---------------column1---------------------
    //time
    let div_time = document.createElement("div");
    div_time.setAttribute("id", "time" + progIndex);
    div_time.setAttribute("class", "time");
    div_time.innerHTML = name_wifi;
    //zone
    // let div_zone = document.createElement("div");
    // div_zone.setAttribute("id", "zone" + progIndex);
    // div_zone.setAttribute("class", "zone");
    // div_zone.innerHTML = "โซน" + (zone + 1);
    //zone time column
    let div_col_zonetime = document.createElement("div");
    div_col_zonetime.setAttribute("id", "column1_edit" + progIndex);
    div_col_zonetime.setAttribute("class", "col-sm-7 col-s-7 col-7 left padding-left ");
    div_col_zonetime.setAttribute("onclick", "TimerSetting(" + progIndex + ")");
    div_col_zonetime.appendChild(div_time);
    // div_col_zonetime.appendChild(div_zone);

    //---------------column3------------------
    let input_tg = document.createElement("input");
    input_tg.setAttribute("id", "tgProgram_" + progIndex);
    input_tg.setAttribute("onclick", "applyWiFi(" + progIndex + ")");
    input_tg.setAttribute("type", "checkbox");
    input_tg.setAttribute("name", "onoffswitch");
    input_tg.setAttribute("class", "onoffswitch-checkbox");

    let span1_tg = document.createElement("span");
    span1_tg.setAttribute("class", "onoffswitch-inner");
    let span2_tg = document.createElement("span");
    span2_tg.setAttribute("class", "onoffswitch-switch");

    let label_tg = document.createElement("label");
    label_tg.setAttribute("class", "onoffswitch-label");
    label_tg.setAttribute("for", "tgProgram_" + progIndex);
    label_tg.appendChild(span1_tg);
    label_tg.appendChild(span2_tg);

    let div_tg2 = document.createElement("div");
    div_tg2.setAttribute("class", "onoffswitch");
    div_tg2.appendChild(input_tg);
    div_tg2.appendChild(label_tg)

    let div_tg1 = document.createElement("div");
    div_tg1.setAttribute("class", "switch");
    div_tg1.appendChild(div_tg2);

    let wifi_icon = document.createElement("div");
    wifi_icon.setAttribute("class", "waveStrength-2");
    wifi_icon.appendChild(wv4_wave);
    let wv4_wave = document.createElement("div");
    wv4_wave.setAttribute("class", "wv4 wave");
    wv4_wave.appendChild(wv3_wave);
    let wv3_wave = document.createElement("div");
    wv3_wave.setAttribute("class", "wv3 wave");
    let wv2_wave = document.createElement("div");
    wv2_wave.setAttribute("class", "wv2 wave");
    wv3_wave.appendChild(wv2_wave);
    let wv1_wave = document.createElement("div");
    wv1_wave.setAttribute("class", "wv1 wave");
    wv2_wave.appendChild(wv1_wave);




    let div_col_tg = document.createElement("div");
    div_col_tg.setAttribute("id", "column2_edit" + progIndex);
    div_col_tg.setAttribute("class", "col-sm-5 col-s-5 col-5 right");
    div_col_tg.appendChild(div_tg1);

    let div_col_tg1 = document.createElement("div");
    div_col_tg1.setAttribute("id", "column2_wave" + progIndex);
    div_col_tg1.setAttribute("class", "col-sm-2 col-s-2 col-2 right");
    div_col_tg1.appendChild(wifi_icon);



    //inner div
    let div_row = document.createElement("div");
    div_row.setAttribute("class", "row");
    div_row.appendChild(div_col_del);
    div_row.appendChild(div_col_zonetime);
    div_row.appendChild(div_col_tg);

    let div_row2 = document.createElement("div");
    div_row2.setAttribute("class", "row");
    div_row2.appendChild(div_col_tg1);
    div_row.appendChild(div_row2)


    //outer div
    let div_box = document.createElement("div");
    div_box.setAttribute("id", "child_" + progIndex);
    div_box.setAttribute("class", "boxboard");
    div_box.appendChild(div_row);

    let id = "time_" + progIndex;
    let box = document.getElementById(id);
    box.appendChild(div_box);

}

function applyWiFi(wifi_ind) {

    console.log("ENTER---Wifi", wifi_ind)
    OpenModal(wifi_ind);


}

function confirmWifiPass() {
    let wifi_pass = password.value;
    console.log("send password to match:", wifi_pass)

}

function OpenModal(wifi_ind) {
    modal_popup.style.display = 'block';
    serialNumber.value = wifi_list.Data[wifi_ind].wiFiName;

}

function CloseModal() {
    document.getElementById("modal_popup").style.display = "none";
    document.getElementById("modal_wifi_res").style.display = "none";

    // document.getElementById("errorMesg").classList.remove("modal-content");
    // document.getElementById("errorMesg").style.fontSize = '20px';
}

function init() {

    wifi_option.style.display = 'none';
    modal_popup.style.display = 'none';
    modal_wifi_res.style.display = 'none';


}