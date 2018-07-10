const $ = require('jquery')
const ajax = require('../ajaxCalls')


class ajaxCalls {
    getField(resource) {
        return $.ajax(`http://localhost:3000/${resource}`)
    }

    postTvShow(name, plot, seasons) {
        return $.ajax({
            url: "http://localhost:3000/tvShows",
            method: "POST",
            data: {
                "name": name,
                "plot": plot,
                "season": seasons
            }
        })
    }

    putTvShow(name, plot, season) {
        return $.ajax({
            url: `http://localhost:3000/events/tvShows`,
            method: "PUT",
            data: {
                "name": name,
                "plot": plot,
                "season": seasons
            }
        })
    }

    deleteTvShow(id) {
        return $.ajax({
            url: `http://localhost:3000/events/tvShows`,
            method: "DELETE"
        })
    }
}


const ajax = new ajaxCalls;

module.exports = ajax;