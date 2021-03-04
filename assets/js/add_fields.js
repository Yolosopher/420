

function removeFromEachPanByIndex(el) {
    let getorder = el.closest('.addedtogether').getAttribute('numvalue')
    document.querySelectorAll(`.addedtogether[numvalue="${getorder}"]`).forEach(each => {
        each.remove()
    })
}


function add_fields() {
	document.querySelectorAll('.tab-pane').forEach((tabPane) => {
		let enId = tabPane.getAttribute('id')
		let txtCenter = tabPane.querySelector('.text-center')
		let linkPutTitle = document.createElement('div')
		tabPane.insertBefore(linkPutTitle, txtCenter)
        let numvalue = 1;
        let getall = document.querySelectorAll('.tab-pane')[2].querySelectorAll('.addedtogether')
        if (getall[0]) {
            numvalue = getall.length + 1
        } else {
            numvalue = 1
        }
        // console.log(numvalue)
		linkPutTitle.outerHTML = `<div numvalue="${numvalue}" class="addedtogether"><div class="form-group ">
        <label class="control-label col-md-3 col-sm-3 col-xs-12">
            admin.urltitle <span class="required">*</span>
        </label>
        <div class="col-md-7 col-sm-7 col-xs-12">
            <input type="text" name="translates[${enId}][urltitle][]" value="" class="form-control col-md-7 col-xs-12">
        </div>
    </div>
    <div class="form-group" style="position: relative" >
                                                <label class="control-label col-md-3 col-sm-3 col-xs-12">
                                                    ბმული <span class="required">*</span>
                                                </label>
                                                <div class="col-md-7 col-sm-7 col-xs-12">
                                                    <input type="text" name="translates[${enId}][url][]" value="" class="form-control col-md-7 col-xs-12">
                                                </div>
<div class="linkRemover" onclick="removeFromEachPanByIndex(this)" style="cursor: pointer; position: absolute; right: 0; top: 0; display: flex; height: 100%;
    align-items: center;" ><i style="font-size: 30px;" class="far fa-times-circle"></i></div>
                                            </div></div>`


	})
}


