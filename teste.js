{
  track: {
    'adicionou-produto-ao-carrinho': function(params, dito, gtm) {
      return {
        url_imagem: $("#pictures_01 div:nth-child(1) > a > img").attr('src'),
        url_produto: gtm.data('pageUrl'),
        seller_id: gtm.data('sellerId'),
      }
    },
  },
}


{
  track: {
    'comprou-produto': function(params, dito, gtm) {
      var product = params.product;
      var size = product.skuName;
      
      return {
        tamanho: size,
      }
    },
  }
}










///
'comprou-produto': function(params, dito, gtm) {
  var product = params.product;
  var size = product.skuName;
  
  return {
    tamanho: size,

{
  track: {
    'adicionou-produto-ao-carrinho': function(params, dito, gtm) {
      return {
        url_imagem: $("#pictures_01 div:nth-child(1) > a > img").attr('src'),
        url_produto: gtm.data('pageUrl'),
        seller_id: gtm.data('sellerId'),
      }
    },
    'comprou-produto': function(params, dito, gtm) {
      var product = params.product;
      var size = product.skuName;
      
      return {
        tamanho: size,
      }
    },
  }
}

////////////// eventos certo ///////////


{
  addToCart: function(params, dito, gtm) {
    var btn = document.querySelector('#bf-buy-button > div > div > button');
    if(!btn) return;

    btn.addEventListener('click', function() {
      var sizeElement = $(".bf-sku__list .selected")[0]
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          id_produto: gtm.data('productId'),
          categorias_produto: gtm.data('productDepartmentName'),
          nome_produto: gtm.data('productName'),
          preco_produto: parseFloat(gtm.data('productPriceFrom')),
          marca: gtm.data('productBrandName'),
          url_imagem: $("#pictures_01 div:nth-child(1) > a > img").attr('src'),
          url_produto: gtm.data('pageUrl'),
          seller_id: gtm.data('sellerId')
        }
      }

      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()

      dito.track(eventData)
    })
  },

  addToCartGrid: function(params, dito, gtm) {
    $("div.bf-shelf-item__button > button").click(function(event) {
      var $parent = $(event.target).parents(".bf-shelf-item__info");
      var $media = $(event.target).parents(".bf-shelf-item__media");
      var sizeElement = $parent.find(".selected")[0]
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          nome_produto: $parent.find(".bf-shelf-item__title a").html(),
          preco_produto: $parent.find(".bf-shelf-item__price--new").attr("content"),
          url_produto: $media.find(".bf-shelf-item__media--link").attr("href"),
          url_imagem: $media.find(".bf-shelf-item__img img").attr("src")
        }
      }
  
      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()
      dito.track(eventData)
    })
  }
}



///ZINCO


{
  addToCart: function(params, dito, gtm) {
    var btn = document.querySelector('#bf-buy-button > div > div > button');
    if(!btn) return;

    btn.addEventListener('click', function() {
      var sizeElement = $(".bf-sku__list .selected")[0]
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          id_produto: gtm.data('productId'),
          categorias_produto: gtm.data('productDepartmentName'),
          nome_produto: gtm.data('productName'),
          preco_produto: parseFloat(gtm.data('productPriceFrom')),
          marca: gtm.data('productBrandName')
        }
      }

      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()

      dito.track(eventData)
    })
  },

  addToCartGrid: function() {
    $("div.bf-shelf-item__button > button").click(function(event) {
      var $parent = $(event.target).parents(".bf-shelf-item__info");
      var sizeElement = $parent.find(".selected")[0]
      var $media = $(event.target).parents(".bf-shelf-item__media");
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          nome_produto: $parent.find(".bf-shelf-item__title a").html(),
          preco_produto: $parent.find(".bf-shelf-item__price--new").attr("content"),
          url_produto: $media.find(".bf-shelf-item__media--link").attr("href"),
          url_imagem: $media.find(".bf-shelf-item__img img").attr("src")
        }
      }
  
      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()
      dito.track(eventData)
    })
  }
}




///// ZINCO ANTIGA ////
{
  addToCart: function(params, dito, gtm) {
    var btn = document.querySelector('#bf-buy-button > div > div > button');
    if(!btn) return;

    btn.addEventListener('click', function() {
      var sizeElement = $(".bf-sku__list .selected")[0]
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          id_produto: gtm.data('productId'),
          categorias_produto: gtm.data('productDepartmentName'),
          nome_produto: gtm.data('productName'),
          preco_produto: parseFloat(gtm.data('productPriceFrom')),
          marca: gtm.data('productBrandName')
        }
      }

      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()

      dito.track(eventData)
    })
  },

  addToCartGrid: function() {
    $("div.bf-shelf-item__button > button").click(function(event) {
      var $parent = $(event.target).parents(".bf-shelf-item__info");
      var sizeElement = $parent.find(".selected")[0]
      var eventData = {
        action: 'adicionou-produto-ao-carrinho',
        data: {
          nome_produto: $parent.find(".bf-shelf-item__title a").html(),
          preco_produto: $parent.find(".bf-shelf-item__price--new").attr("content"),
        }
      }
  
      if (sizeElement)
        eventData.data.tamanho = (sizeElement.innerText || "").trim()
      dito.track(eventData)
    })
  }
}