<!DOCTYPE html>
<html ng-app="myapp">

<?php
    include 'include/head.php';
?>

<body>


    <div id="okvir">
        
        <?php
        include 'include/header.php';
        include 'include/angular-view.php';
        include 'include/resime.php';
        include 'include/experience.php';
        include 'include/footer.php';
        ?>
        
        
    </div>

	
</body>

<script src="js/route.js"></script>

<!--
<script>
    $(window).on('scroll', function(){
	$timeline_block.each(function(){
		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
});
</script>
-->
</html>