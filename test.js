const {rename} = require('fs');
rename("./a.png", "t.png", (e) => {if (e) throw e})
