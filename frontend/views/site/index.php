<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */
$this->title = "rzr.io"
?>


<?php if(Yii::$app->user->isGuest): ?>
    <div class=current-info>

        <?php $form = ActiveForm::begin(['id' => 'login-form', 'class' => 'form']); ?>


        <span class=settings-name><?php echo $form->field($model, 'identity') ?></span>
                                    <span
                                        class=settings-name><?php echo $form->field($model, 'password')->passwordInput() ?></span>
                                    <span
                                        class=settings-name><?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['id' => 'login-button', 'name' => 'login-button', 'class' => 'button button-load load-video', 'data-model' => '1']) ?></span>
        <?php ActiveForm::end(); ?>

    </div>

    <div class=assets-info>
        <div class="rule right"></div>
        <div class=current-info>
            <button data-model=1 data-assets=4 class="button button-load load-webgl">Login
            </button>

        </div>
    </div>
<?php else : ?>
    <div class="current-info">

        Welcome <?php echo Yii::$app->user->identity->username ?>

        <script src="http://d3js.org/d3.v3.min.js"></script>
        <script src="http://d3js.org/topojson.v1.min.js"></script>
        <!-- I recommend you host this file on your own, since this will change without warning -->
        <script src="http://datamaps.github.io/scripts/datamaps.world.min.js?v=1"></script>
        <div id="container1" style="position: absolute; top: 20px; right: 80px; height: 800px; margin: 0 auto; z-index: 60000"></div>


        <script>
            //basic map config with custom fills, mercator projection
            var map = new Datamap({
                scope: 'world',
                element: document.getElementById('container1'),
                height: 1000
            })




        </script>


    </div>


<?php endif; ?>



