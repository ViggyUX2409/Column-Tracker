const field = "status";

let column = {
    name: "Revenue",
    dataType: "currency",
    status: "draft",
    isVisible: true,
    tags: ["finance", "Q3"],
    validation: {
        min: 0,
        required: true
    }
};

column.validation.min       // 0
column["validation"]["min"] // 0
column.validation.required       // true
column["validation"]["required"] // true

column[field] = "published"; // updates status using the field variable
console.log(column.status);  // "published"
