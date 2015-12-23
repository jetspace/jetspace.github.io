function scrollTo(name)
{
  var element_to_scroll_to = document.getElementById(name);
  element_to_scroll_to.scrollIntoView(true);
}

function openpage(url)
{
  window.location.href = url;
}
