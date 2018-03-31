<?php

	$show_swf_name = $_REQUEST['name'];
	$show_swf_name = '"' . $show_swf_name . '"';

?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>
toshi23.net - Show Flash
</title>
<script type="text/javascript" src="../js/swf2js.js"></script>
</head>
<body>
<script type="text/javascript">
swf2js.load(<?php print($show_swf_name); ?>);
</script>
</body>
</html>