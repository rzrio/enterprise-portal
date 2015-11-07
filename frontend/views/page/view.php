<?php
/**
 * @var $this \yii\web\View
 * @var $model \common\models\Page
 */
$this->title = $model->title;
?>

<div style=" position: absolute; top: 300px; color: white;">
    <h1><?php echo $model->title ?></h1>
<?php echo $model->body ?>
    </div>
