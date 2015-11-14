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

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <h2>    <?= $budgetsize->description ?> </h2>

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

    <?= DetailView::widget([
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
            'picture',
        ],
    ]) ?>

</div>
