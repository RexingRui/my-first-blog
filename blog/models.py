from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Category(models.Model):
	"""docstring for Category---文章类别"""
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class Tag(models.Model):
	"""docstring for Tag----文章标签"""
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name

			
class Post(models.Model):
	"""文章的数据库"""

	author = models.ForeignKey(User)  # User 是 Django 为我们已经写好的用户模型。
	title = models.CharField(max_length=70)
	body = models.TextField()
	created_time = models.DateTimeField()
	modified_time = models.DateTimeField()
	excerpt = models.CharField(max_length=200, blank=True)
	category = models.ForeignKey(Category)
	tags = models.ManyToManyField(Tag, blank=True)

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse('blog:detail', kwargs={'pk': self.pk})

	class Meta:
		ordering = ['-created_time']
