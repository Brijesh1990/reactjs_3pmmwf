function validation()
{
    if(document.frm.name.value=="")
    {
        alert('Please enter your Name *')
        document.frm.name.focus();
        return false;
    }
    // only accept alphabetic charcter in name RE
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.name.value))
    {
            alert('Please enter your Name only accept with alphabetic characters only *')
            document.frm.name.focus();
            return false;
    }


    if(document.frm.email.value=="")
        {
            alert('Please enter your Email *')
            document.frm.email.focus();
            return false;
        }
        // check valid email address re
        
    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!em.test(document.frm.email.value))
        {
                alert('Please enter your Valid email Address *')
                document.frm.email.focus();
                return false;
        }

        if(document.frm.mobile.value=="")
            {
                alert('Please enter your Mobile *')
                document.frm.mobile.focus();
                return false;
            }

            
        if(document.frm.subject.value=="")
            {
                alert('Please enter your Subject *')
                document.frm.subject.focus();
                return false;
            }

            if(document.frm.message.value=="")
                {
                    alert('Please enter your message *')
                    document.frm.message.focus();
                    return false;
                } 
}