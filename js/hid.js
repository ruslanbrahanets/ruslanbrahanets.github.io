function asArr(arrayLike) {
    return [].slice.call(arrayLike, 0)
}
function setActiveArticle(articlesNodes, activeArticleNode, direction) {
    articlesNodes.forEach(function(articleNode) {
        if (articleNode === activeArticleNode) {
            if(direction=="left")
            {
                articleNode.classList.add('fadeIn');
                articleNode.classList.add('current');
            }
            if(direction=="right")
            {
                articleNode.classList.add('fadeIn');
                articleNode.classList.add('current');
            }
        } else {
            articleNode.classList.remove('current');
            articleNode.classList.remove('fadeIn');
        }
    })
}
function getNextArticle(articlesNodes, articleNode) {
    var articleIndex = articlesNodes.indexOf(articleNode)
    var totalArticlesIndexes = articlesNodes.length - 1
    if (articleIndex === totalArticlesIndexes) {
        return articlesNodes[0]
    } else {
        return articlesNodes[articleIndex + 1] 
    }
}
function getPrevArticle(articlesNodes, articleNode) {
    var articleIndex = articlesNodes.indexOf(articleNode)
    var totalArticlesIndexes = articlesNodes.length - 1
    if (articleIndex === 0) {
        return articlesNodes[totalArticlesIndexes]
    } else {
        return articlesNodes[articleIndex - 1] 
    }
}
var ACTIVE_ARTICLE_DEFAULT_INDEX = 0
function main() {
    var articlesNodes = asArr(document.querySelectorAll('.BRG-page-portfolio-elements-hid .place'))
    var nextNode = document.querySelector('#next')
    var prevNode = document.querySelector('#prev')
    console.log('got', articlesNodes)
    var currentlyActiveArticle = articlesNodes[ACTIVE_ARTICLE_DEFAULT_INDEX]
    setActiveArticle(articlesNodes, currentlyActiveArticle)
    nextNode.addEventListener('click', function (event) {
        event.preventDefault();
        var nextArticle = getNextArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, nextArticle, "left")
    currentlyActiveArticle = nextArticle
    })
    prevNode.addEventListener('click', function (event) {
        event.preventDefault();
        var prevArticle = getPrevArticle(articlesNodes, currentlyActiveArticle)
    setActiveArticle(articlesNodes, prevArticle, "right")
    currentlyActiveArticle = prevArticle
    })
}
main()