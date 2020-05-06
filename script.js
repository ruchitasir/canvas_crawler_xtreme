let game = document.getElementById('game')
let position = document.getElementById('movement')
let context = game.getContext('2d')

let player
let ogre

function Crawler(x, y, color, height, width) {
    this.x = x
    this.y = y
    this.color = color
    this.height = height
    this.width = width
    this.alive = true
    this.render = () => {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.height, this.width)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    player = new Crawler(10, 10, 'blue', 16, 16)
    ogre = new Crawler(200, 50, 'lightgreen', 32, 48)

    document.addEventListener('keydown', (e) => {
        console.log(e.keyCode)
    })
    document.addEventListener('keydown', movementHandler)

    setInterval(gameLoop, 60)
})

const detectHit = () => {
    if (player.x < ogre.x + ogre.width
        && player.x + player.width > ogre.x
        && player.y < ogre.y + ogre.height
        && player.y + player.height > ogre.y) {
            ogre.alive = false
            document.getElementById('status').textContent = "You Win!"
        }
}

const gameLoop = () => {
    if(ogre.alive){
        detectHit()
    }
    context.clearRect(0, 0, game.width, game.height)
    position.textContent = player.x + ' ' + player.y
    player.render()
    if (ogre.alive){
        ogre.render()
    }
}

const movementHandler = (e) => {
    // w = 87, a = 65, s = 83, d = 68
    switch (e.keyCode) {
        case (87):
            console.log(e.keyCode)
            player.y -= 10
            break
        case (65):
            player.x -= 10
            break
        case (83):
            player.y += 10
            break
        case (68):
            player.x += 10
            break
    }
}