var eHelper = {

	createE: function(tag, innerText, value) {
		
	  let e = document.createElement(tag);

	  if (innerText) {
	    e.innerText = innerText;
	  }

	  if (value !== undefined) {
	    e.value = value
	  }

	  return e;
	}

};

module.exports = eHelper;