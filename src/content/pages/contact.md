---
title: 联系
description: 联系我
noIndex: false
hideTOC: false
aliases:
  - contact-me
  - contact-us
---
给我发消息

<form   
  name="contact"   
  method="POST"   
  data-netlify="true"   
  netlify-honeypot="bot-field"
  action="/thank-you"  
  class="form-sleek"  
>  
  <!-- Hidden honeypot field for spam protection -->  
  <input type="hidden" name="bot-field" />  
    
  <!-- Hidden form name field (required for Netlify) -->  
  <input type="hidden" name="form-name" value="contact" />  
    
  <input   
    type="text"   
    id="name"   
    name="name"   
    required   
    class="w-full"   
    placeholder="Name"  
  />  
    
  <input   
    type="email"   
    id="email"   
    name="email"   
    required   
    class="w-full"   
    placeholder="Email"  
  />  
    
  <textarea   
    id="message"   
    name="message"   
    rows="4"   
    required   
    class="w-full"   
    placeholder="Message"  
  ></textarea>  
    
  <button type="submit" class="btn btn-primary w-full">  
     发送消息
  </button>  
</form>

