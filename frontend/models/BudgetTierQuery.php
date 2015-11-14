<?php

namespace app\models;

/**
 * This is the ActiveQuery class for [[BudgetTier]].
 *
 * @see BudgetTier
 */
class BudgetTierQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        $this->andWhere('[[status]]=1');
        return $this;
    }*/

    /**
     * @inheritdoc
     * @return BudgetTier[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return BudgetTier|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}