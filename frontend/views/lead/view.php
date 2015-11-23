<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\BudgetTier;
use scotthuangzl\googlechart\GoogleChart;



/* @var $this yii\web\View */
/* @var $model app\models\Lead */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Leads', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

$budgetsize = BudgetTier::findOne(['level'=>$model->budget_tier]);

?>
<div class="lead-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <h4> <?= Html::encode($model->title) ?> </h4>

    <?= Html::img($model->picture, ['width'=>'350','height'=>'350'],['alt' => $model->name]);?>

    <h3>Personal Bio</h3>

    <p> <?= Html::encode($model->person_biography) ?> </p>

    <h3> <?= Html::a($model->company, $model->company_url) ?> </h3>

    <p> <?= Html::encode($model->company_description) ?> </p>

    <h4> Endpoints: <?= Html::encode($model->endpoints) ?> </h4>

    <h4> Platforms: <?= Html::encode($model->platforms) ?> </h4>

    <h4> Cost Reduction Areas: <strong><?= Html::encode($model->cost_reduction_areas) ?> </strong> </h4>

    <h3> Confirmed Budget: <?= $budgetsize->description ?> </h3>

    <?= GoogleChart::widget(array('visualization' => 'PieChart',
        'data' => array(
            array('Budget Categories', 'Percent'),
            array('Mandated', $model->budget_mandated),
            array('Maintenance', $model->budget_maintenance),
            array('Innovation', $model->budget_innovation),
            array('Growth', $model->budget_growth)
        ),
        'options' => array('title' => 'Budget Divisions')));
    ?>
<p>    <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
    <?= Html::a('Delete', ['delete', 'id' => $model->id], [
        'class' => 'btn btn-danger',
        'data' => [
            'confirm' => 'Are you sure you want to delete this item?',
            'method' => 'post',
        ],
    ]) ?>
</p>

    <?=/* DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'company',
            'company_url:url',
            'name',
            'title',
            'contacts:ntext',
            'company_description:ntext',
            'person_biography:ntext',
            'budget_tier',
            'budget_mandated',
            'budget_maintenance',
            'budget_innovation',
            'budget_growth',
            'investment_priorities:ntext',
            'platforms:ntext',
            'cost_reduction_areas:ntext',
            'endpoints:ntext',
            'picture:image',
        ],
    ]) */?>

<!--    <?// json_encode($model->attributes); ?> -->

</div>
