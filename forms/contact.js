
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwpDe5EkF6U1GaT2uXKavdlfjfoPBci_ttUq6X5IVM3t8ol2WKQUhaoNiu2OvsWmajK/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            Swal.fire({
                title: "Good job!",
                text: "Your Enquiry Submitted Succesfully !",
                icon: "success"
              });
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
