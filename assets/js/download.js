function download_thumbnail() {
    var link = document.getElementById("link").value
    console.log(link, link.length)
    if (link.length == 43) {
        link = link.replace("https://www.youtube.com/watch?v=", "")
        link = "https://i.ytimg.com/vi/" + link + '/hqdefault.jpg'
        console.log(link)
        document.getElementById("infos").innerHTML = "<h3>Miniature (cliquez pour ouvrir) :</h3><a href='" + link + "'><img src='" + link + "' class='minia'></a>"
    } else {
        window.alert("Lien invalide.")
    }
}