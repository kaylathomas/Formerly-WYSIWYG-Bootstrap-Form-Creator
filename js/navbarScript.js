//============================
//		NAVBAR DISPLAY
//============================

let menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		showLeft = document.getElementById( 'showLeft' ),
		showRight = document.getElementById( 'showRight' ),
		showLeftPush = document.getElementById( 'showLeftPush' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;

$(".showLeft").click(function() {
	classie.toggle( this, 'active' )
	classie.toggle( menuLeft, 'cbp-spmenu-open' )
	disableOther( 'showLeft' )
})

$("#showRight").click(function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
})

$("#showLeftPush").click(function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeftPush' );
})

$("#showRightPush").click(function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
});

function disableOther( button ) {
	if( button !== 'showLeft' ) {
		classie.toggle( showLeft, 'disabled' );
	}
	if( button !== 'showRight' ) {
		classie.toggle( showRight, 'disabled' );
	}
	if( button !== 'showLeftPush' ) {
		classie.toggle( showLeftPush, 'disabled' );
	}
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}

//============================
//    DEVELOPER MODE LOGIC
//============================

$("#simpleEditor").click(function(){
	$("#developerMode").removeClass("active")
	$(this).addClass("active")
	$("#yourForm .input-group").addClass("mb-2")

	$("#yourForm .edit-attributes").addClass("d-none")
})

$("#developerMode").click(function(){
	$("#simpleEditor").removeClass("active")
	$(this).addClass("active")
	$("#yourForm .input-group").removeClass("mb-2")

	$("#yourForm .edit-attributes").removeClass("d-none")
})

$("#whiteLogo").hide()

//============================
//		NIGHTMODE LOGIC
//============================

$("#nightModeButton").on('change.bootstrapSwitch', function(e) {
	e.preventDefault(e)
	$("body").toggleClass("bg-black")
	$(".accordion").toggleClass("border-black border-white side-nav-shadow")
	$(".py-0").toggleClass("bg-dark-gray bg-black")
	$(".accordion .font-weight-lighter").toggleClass("text-white")
	$(".accordion .font-weight-light").toggleClass("text-white")
	$(".nav-borders").toggleClass("border-gray border-white")
	$("#buttonCustom").toggleClass("btn-outline-dark btn-outline-light")
	$(".font-weight-button").toggleClass("btn-outline-light btn-outline-secondary")
	$(".text-align-button").toggleClass("btn-outline-light btn-outline-secondary")
	$("#blackLogo").toggle()
	$("#whiteLogo").toggle()
	$("#buttonDefault").toggleClass("btn-outline-dark btn-outline-light")
});
