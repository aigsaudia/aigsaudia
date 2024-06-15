
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyj29asDzQihSVGeEH0nkGTbUhTwgmlW24y7sX2TH-2lJFWlgmirPO18ViuuR4rhB8/exec",
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
