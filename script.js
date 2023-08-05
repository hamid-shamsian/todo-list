document.addEventListener("DOMContentLoaded", () => {
   const addButton = document.getElementById("add");
   const addInput = document.getElementById("item");

   addButton.addEventListener("click", function () {
      let newItem = document.getElementById("item").value;
      if (newItem) {
         addItemTodo(newItem);
         document.getElementById("item").value = "";
      }
   });

   var counter = 1;
   function addItemTodo(text) {
      let list = document.getElementById("todo");
      var str = `
        <li class="d-flex border-bottom p-3">
                ${counter}
                <div class="form-check">
                <label for="" class="form-check-label">${text}</label>
                </div>
                <i class="fa fa-check ml-auto text-success" id="complete-${counter}"></i>
                <i class="fa fa-remove ml-4 text-danger" id="remove-${counter}"></i>
        </li>
                `;
      list.insertAdjacentHTML("afterBegin", str);

      let complete = document.getElementById("complete-" + counter);
      complete.addEventListener("click", toggleItem);

      let remove = document.getElementById("remove-" + counter);
      remove.addEventListener("click", removeItem);

      counter++;
   }

   function toggleItem() {
      let item = this.parentNode;
      let parent = item.parentNode;
      let id = parent.id;

      if (id === "todo") {
         var target = document.getElementById("completed");
         this.className = "fa fa-undo ml-auto text-warning";
      } else {
         var target = document.getElementById("todo");
         this.className = "fa fa-check ml-auto text-success";
      }

      target.insertBefore(item, target.childNodes[0]);
   }

   function removeItem() {
      let item = this.parentNode;
      let parent = item.parentNode;
      parent.removeChild(item);
   }
});
