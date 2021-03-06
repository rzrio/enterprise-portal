<?php
namespace frontend\controllers;

use Yii;
use yii\filters\AccessControl;
use frontend\models\ContactForm;
use yii\web\Controller;
use common\models\User;
use app\models\Partner;
use app\models\PartnerSearch;

use frontend\modules\user\models\LoginForm;
/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * @inheritdoc
     */

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction'
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null
            ],
            'set-locale'=>[
                'class'=>'common\actions\SetLocaleAction',
                'locales'=>array_keys(Yii::$app->params['availableLocales'])
            ]
        ];
    }

    public function actionIndex()
    {
if(Yii::$app->user->isGuest){

    $this->redirect('/user/sign-in/login', 200);

}

        $searchModel = new PartnerSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        $model = new LoginForm();



if (Yii::$app->request->isAjax) {
            $model->load($_POST);
            Yii::$app->response->format = Response::FORMAT_JSON;
            return ActiveForm::validate($model);
        }
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {


            return $this->render('index', [
                'model' => $model
            ]);
        }
    }

    public function actionSemver()
    {
            return $this->render('semver');
    }

    public function actionNow()
    {
        return $this->render('now');
    }

    public function actionOverview()
    {
        return $this->render('overview');
    }

    public function actionWorldmap()
    {
        return $this->render('worldmap');
    }

    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($model->contact(Yii::$app->params['adminEmail'])) {
                Yii::$app->getSession()->setFlash('alert', [
                    'body'=>Yii::t('frontend', 'Thank you for contacting us. We will respond to you as soon as possible.'),
                    'options'=>['class'=>'alert-success']
                ]);
                return $this->refresh();
            } else {
                Yii::$app->getSession()->setFlash('alert', [
                    'body'=>\Yii::t('frontend', 'There was an error sending email.'),
                    'options'=>['class'=>'alert-danger']
                ]);
            }
        }

        return $this->render('contact', [
            'model' => $model
        ]);
    }
}
