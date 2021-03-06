const contentBox = document.getElementById('content-box');


// create prod categ
const prodCategTemp = (t) => {
    const container = document.createElement('div');
    container.classList = "prod-categ";
    container.id = 1;
    const temp = `<h4>قسم المجمدات</h4> <div class="row"> <div class="col-8"> <div class="btn-group" role="group" aria-label="Basic mixed styles example"> <button type="button" class="btn btn-success" onclick="genrateBarCode()" data-bs-toggle="modal" data-bs-target="#add-prod-modal" id="add-prod">اضافة منتج</button> <button type="button" class="btn btn-warning">تعديل القسم</button> <button type="button" class="btn btn-danger">حذف القسم</button> </div> </div> </div> <div class="prod-box col-8"> <h4>المنتجات</h4> <ol class="list-group list-group-numbered"> <li class="list-group-item d-flex justify-content-between align-items-start"> <div class="ms-2 me-auto"> <div class="fw-bold prod-name">دجاج</div> <div class="btn-group" role="group" aria-label="Basic mixed styles example"> <button type="button" class="btn btn-warning"> <a href="#">تعديل</a></button> <button type="button" class="btn btn-danger">حذف</button> </div> </div> <span class="badge bg-danger rounded-pill">0</span> </li> </ol> </div> <div class="modal fade" id="add-prod-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="exampleModalLabel">اضافة منتج</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body"> <form> <div class="mb-3"> <label for="categ-name" class="form-label">اسم المنتج</label> <input type="text" name="name" class="form-control" id="prod-name"> </div> <div class="mb-3"> <label for="categ-name" class="form-label">السعر</label> <input type="number" name="price" class="form-control" id="prod-price"> </div> <div class="mb-3"> <label for="categ-name" class="form-label">الكمية</label> <input type="number" name="quant" class="form-control" id="prod-quant"> </div> <div class="mb-3"> <label for="categ-name" class="form-label">الصورة</label> <input type="file" name="img" class="form-control" id="prod-img">                                     <svg class="barcode" jsbarcode-format="upc" jsbarcode-value="123456789012"
                                        jsbarcode-textmargin="0" jsbarcode-fontoptions="bold">
                                    </svg> </div> <button type="submit" class="btn btn-primary">حفظ</button> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">الغاء</button> </div> </div> </div> </div>`;
    container.innerHTML = temp;
    contentBox.appendChild(container);
    t.style = ' pointer-events: none;'
}
const genrateBarCode = () => {
    JsBarcode(".barcode").init();
}